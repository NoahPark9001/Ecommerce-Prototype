// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qrhylctulgcihvemwtmc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyaHlsY3R1bGdjaWh2ZW13dG1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4MzAzMzAsImV4cCI6MjAzODQwNjMzMH0.UrV6dExoceT3lru-Zvf15nuSddqIpuuO6O2-diN5dIE";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
