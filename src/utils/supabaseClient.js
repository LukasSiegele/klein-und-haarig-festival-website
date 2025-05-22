import { createClient } from "@supabase/supabase-js";

// This ensures our frontend is only using the ANON key
const supabaseUrl = process.env.GATSBY_SUPABASE_URL;
const supabaseAnonKey = process.env.GATSBY_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase env vars");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
