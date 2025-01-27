import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(
  "https://xgyxnnzyahcfidvkayxg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhneXhubnp5YWhjZmlkdmtheXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MjM5MjMsImV4cCI6MjA1MzQ5OTkyM30.kD4ibSa9WcekLVk7JcwULmkJS7yciCBKYKUsPNRLvLc",
);

export default supabase;
