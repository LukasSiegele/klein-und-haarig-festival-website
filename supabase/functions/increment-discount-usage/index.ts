import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

console.log("increment-discount-usage function booting up");

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { code } = await req.json();

    if (!code || typeof code !== 'string' || code.trim() === '') {
       return new Response(JSON.stringify({ success: false, error: 'Code is required.' }), {
         headers: { ...corsHeaders, 'Content-Type': 'application/json' },
         status: 400,
       });
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );


    const { data: currentCodeData, error: fetchError } = await supabaseAdmin
      .from('discount_codes')
      .select('times_used')
      .eq('code', code) 
      .limit(1)
      .single();

    if (fetchError || !currentCodeData) {
        console.error(`Code ${code} not found for incrementing usage.`, fetchError);
        // Wichtig: Hier keinen Fehler zurückgeben, der den Frontend-Flow stoppt,
        // da die Bestellung an sich schon durch ist. Nur loggen oder still fehlschlagen.
         return new Response(JSON.stringify({ success: true, warning: 'Code not found for usage increment.' }), {
           headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 });
    }

    // Erhöhe den Zähler
    const newTimesUsed = currentCodeData.times_used + 1;

    const { error: updateError } = await supabaseAdmin
      .from('discount_codes')
      .update({ times_used: newTimesUsed })
      .eq('code', code); // Update genau diesen Code

    if (updateError) {
      console.error(`Failed to increment usage for code ${code}:`, updateError);
      // Auch hier keinen harten Fehler zurückgeben
       return new Response(JSON.stringify({ success: true, warning: 'Failed to increment usage count.' }), {
           headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 });
    }

    console.log(`Successfully incremented usage count for code ${code} to ${newTimesUsed}`);
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error("Error in increment-discount-usage function:", error);
    // Generischer Fehler, sollte aber den Frontend-Fluss nicht stoppen
    return new Response(JSON.stringify({ success: false, error: 'Internal server error.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500, // Optional: 200 zurückgeben, um Frontend nicht zu stören
    });
  }
});