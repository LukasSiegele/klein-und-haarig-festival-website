import "jsr:@supabase/functions-js/edge-runtime.d.ts"; 
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

console.log(`Function "validate-code" started.`);

// Definiert, was im Request Body erwartet wird
interface RequestBody {
  code?: string;      // Der eingegebene Rabattcode
  productId?: string; // Optional: Die ID des Produkts, für das der Code gilt
}

// Definiert Daten aus Supabase 'discount_codes' Tabelle
interface DiscountCodeData {
  id: string | number; // Je nachdem, was dein Primary Key ist
  code: string;
  is_active: boolean;
  valid_until: string | null; // Zeitstempel als String oder null
  product_id: string | null;  // Produkt-ID als String oder null (für globale Codes)
  usage_limit: number | null; // Nutzungslimit als Zahl oder null
  times_used: number;         // Wie oft wurde er genutzt
}

serve(async (req: Request) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // 1. Daten aus dem Request Body holen
    const body = await req.json() as RequestBody;
    const { code, productId } = body;

    // Prüft, ob ein Code gesendet wurde
    if (!code) {
      throw new Error("Discount code is required.");
    }
    console.log(`Validating code: "${code}" for product: ${productId || '(any)'}`);

    // 2. Supabase Admin Client erstellen (sicher)
    const supabaseAdmin: SupabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );

    // 3. Rabattcode-Tabelle abfragen
    let query = supabaseAdmin
      .from('discount_codes')
      // Wählt Spalten für Validierung aus
      .select('id, code, is_active, valid_until, product_id, usage_limit, times_used')
      .ilike('code', code)      
      .eq('is_active', true);

    // Wenn eine productId übergeben wurde, filtere weiter:
    // Erlaube Codes, die KEINE product_id haben (global gültig) ODER die passende product_id haben.
    if (productId) {
      query = query.or(`product_id.is.null,product_id.eq.${productId}`);
    } else {
      // Optional: Wenn keine productId gesendet wird, können hier auch nur globale Codes erlaubt werden:
      // query = query.is('product_id', null);
      // Aktuell werden alle aktiven Codes mit passendem `code` geprüft, wenn keine productId gesendet wird.
    }

    // Führe die Abfrage aus (erwarte max. 1 Ergebnis wegen unique 'code')
    const { data: codes, error: fetchError } = await query.limit(1);

    if (fetchError) {
      console.error("Database error fetching discount code:", fetchError.message);
      throw new Error(`Database error: ${fetchError.message}`);
    }

    // 4. Gefundenen Code validieren
    if (!codes || codes.length === 0) {
      // Code nicht gefunden, nicht aktiv oder nicht für dieses Produkt gültig
      console.log(`Code "${code}" not found, inactive, or not applicable.`);
      // Wichtig: HTTP 200 senden, da die Funktion OK lief, aber das Ergebnis "ungültig" ist
      return new Response(JSON.stringify({ valid: false, reason: 'Code not found or inactive.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 });
    }

    // Code gefunden, jetzt Details prüfen
    const discountCode = codes[0] as DiscountCodeData;

    // Prüft Ablaufdatum (falls vorhanden)
    if (discountCode.valid_until && new Date(discountCode.valid_until) < new Date()) {
       console.log(`Code "${code}" expired on ${discountCode.valid_until}.`);
       return new Response(JSON.stringify({ valid: false, reason: 'Code expired.' }), {
         headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 });
    }

    // Prüfe Nutzungslimit (falls vorhanden)
    // Prüft Spaltennamen 'usage_limit' und 'times_used' in Supabase Tabelle
    if (discountCode.usage_limit !== null && discountCode.times_used >= discountCode.usage_limit) {
        console.log(`Code "${code}" usage limit (${discountCode.usage_limit}) reached.`);
        return new Response(JSON.stringify({ valid: false, reason: 'Code usage limit reached.' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 });
    }

    // 5. Alle Prüfungen bestanden -> Code ist gültig
    console.log(`Code "${code}" is valid.`);
    return new Response(JSON.stringify({ valid: true }), { // Nur {valid: true} zurückgeben
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    // Generelle Fehlerbehandlung
    console.error('!!! Error in validate-code function !!!:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    // Status 500 für Serverfehler, 400 für Client-Fehler (z.B. fehlender Code im Request)
    const status = (error instanceof Error && error.message.includes("required")) ? 400 : 500;
    return new Response(JSON.stringify({ valid: false, error: errorMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: status,
    });
  }
});