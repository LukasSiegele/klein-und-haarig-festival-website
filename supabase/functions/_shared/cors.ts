export const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*', // '*' allows all origins - use https://kleinundhaarig.de for production
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};