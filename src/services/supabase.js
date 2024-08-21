import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";
import 'react-native-get-random-values'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || 'deu ruim na url do supabase';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'deu ruim na key do supabase';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});