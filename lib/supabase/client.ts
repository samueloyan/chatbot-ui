import { createBrowserClient } from "@supabase/ssr"
import { getSupabaseEnv } from "./env"

export const createClient = () => {
  const { url, anonKey } = getSupabaseEnv()

  return createBrowserClient(
    url || "https://example.supabase.co",
    anonKey || "public-anon-key"
  )
}
