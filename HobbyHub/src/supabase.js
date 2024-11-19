import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qtnzluxmqwhdxplxvfgp.supabase.co"; // Replace with your Supabase URL
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0bnpsdXhtcXdoZHhwbHh2ZmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5OTY0MjksImV4cCI6MjA0NzU3MjQyOX0.6pLsBYyRf106k2Fmv6980O6BDyS54YWhqlGVs5m6Mf8"; // Replace with your Supabase Key

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
