// supabase/functions/decrement-stock/index.ts

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

interface RequestBody {
  productId?: string;
  sizeLabel?: string;
}

interface SizeInfo {
  label: string;
  stock: number;
}

// Interface korrigiert: Property heißt 'sizes'
interface ProductData {
  sizes: SizeInfo[] | null | any; // <-- KORRIGIERT
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json() as RequestBody;
    const { productId, sizeLabel } = body;

    if (!productId || !sizeLabel) {
      throw new Error("Product ID and Size Label are required.");
    }
    console.log(`Received request for productId: ${productId}, sizeLabel: ${sizeLabel}`);

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

    const supabaseAdmin: SupabaseClient = createClient(
      supabaseUrl,
      supabaseKey,
      { auth: { persistSession: false } }
    );
    console.log("Supabase admin client created.");

    console.log(`Workspaceing product data for ID: ${productId}`);

    const { data: product, error: fetchError } = await supabaseAdmin
      .from('products')
      .select('sizes')
      .eq('id', productId)
      .single<ProductData>(); 

    if (fetchError) {
      console.error("Error fetching product:", fetchError.message);
      throw new Error(`Product with ID ${productId} not found or fetch error: ${(fetchError as Error).message}`);
    }

    if (!product || product.sizes === null || typeof product.sizes === 'undefined') {
      throw new Error(`Product with ID ${productId} not found or has no size data.`);
    }
    console.log("Product data fetched:", product);

    const sizeArray: unknown = product.sizes;

    if (!Array.isArray(sizeArray)) {
      console.error("Invalid size data structure:", sizeArray);
      throw new Error(`Invalid size data structure for product ${productId}. Expected an array.`);
    }

    let found = false;
    let stockAvailable = false;

    const updatedSizeArray = (sizeArray as any[]).map((item: any): SizeInfo | any => {
      if (typeof item !== 'object' || item === null || typeof item.label !== 'string' || typeof item.stock !== 'number') {
        console.warn(`Skipping invalid item in size array for product ${productId}:`, item);
        return item;
      }
      const sizeItem = item as SizeInfo;
      if (sizeItem.label === sizeLabel) {
        console.log(`Found matching size: ${sizeLabel}, current stock: ${sizeItem.stock}`);
        found = true;
        if (sizeItem.stock > 0) {
          stockAvailable = true;
          console.log(`Decrementing stock for size: ${sizeLabel}`);
          return { ...sizeItem, stock: sizeItem.stock - 1 };
        } else {
          console.log(`Stock for size ${sizeLabel} is already 0.`);
          return sizeItem;
        }
      }
      return sizeItem;
    });

    if (!found) {
      throw new Error(`Size "${sizeLabel}" not found for product ${productId}.`);
    }
    if (!stockAvailable) {
      throw new Error(`Size "${sizeLabel}" for product ${productId} is out of stock.`);
    }

    console.log("Updated size array prepared:", updatedSizeArray);

    console.log(`Updating product ${productId} in database...`);

    const { error: updateError } = await supabaseAdmin
      .from('products')
      .update({ sizes: updatedSizeArray as SizeInfo[] })
      .eq('id', productId);

    if (updateError) {
      console.error("Error updating product:", updateError.message);
      throw new Error(`Failed to update stock: ${(updateError as Error).message}`);
    }
    console.log(`Product ${productId} updated successfully.`);

    return new Response(JSON.stringify({ success: true, message: 'Stock updated successfully.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('!!! Error in decrement-stock function !!!:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});