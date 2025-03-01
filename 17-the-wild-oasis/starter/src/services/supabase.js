import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mkviynkuskvllowfhifk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rdml5bmt1c2t2bGxvd2ZoaWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MTc2NTcsImV4cCI6MjA1NjM5MzY1N30.FUKjgIbuRiL3g2GqLhWw0RMSimV7lE1xgCm8z8i_L30";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
