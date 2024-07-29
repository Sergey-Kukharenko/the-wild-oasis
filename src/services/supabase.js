import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://fajrcnhchbkkdorawwnp.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhanJjbmhjaGJra2RvcmF3d25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1MDQ1NDMsImV4cCI6MjAyOTA4MDU0M30.a8gmC2gh_6HNEAc9lNSVuzHzABPBdJ1WES5H73wbZC4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
