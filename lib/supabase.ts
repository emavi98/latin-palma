import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://orjpdevjyfchuscuhrrm.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yanBkZXZqeWZjaHVzY3VocnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNzEwNjksImV4cCI6MjA0MDg0NzA2OX0.96cCjSz4WihmBz6J2-Rt4HXJbykhMmkUHArscIAU3Gk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
