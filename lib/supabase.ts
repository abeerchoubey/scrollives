import { createClient } from '@supabase/supabase-js'

const supabaseUrl      = process.env.NEXT_PUBLIC_SUPABASE_URL      ?? ''
const supabaseAnonKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    '[ScrollLives] Missing Supabase credentials. ' +
    'Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
  )
}

// Validate URL format to prevent injection
try {
  new URL(supabaseUrl)
} catch {
  throw new Error('[ScrollLives] NEXT_PUBLIC_SUPABASE_URL is not a valid URL')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,  // No server-side session persistence for client-side only
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})
