import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cnyzxzcampcsuewmnmek.supabase.co"; // This is the URL of the Supabase project, can be found in the project settings on Supabase.com
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueXp4emNhbXBjc3Vld21ubWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3OTAzNTcsImV4cCI6MjA2MTM2NjM1N30.yzJ-5YKCBKVi5_h-qgxPye2EiJjs2ji8awtoTUn0oX8"; // This is the Anon Key of the Supabase project, can be found in the project settings on Supabase.com
export const supabase = createClient(supabaseUrl, supabaseKey);