import { Database } from "@/supabase/types"
import { createBrowserClient } from "@supabase/ssr"
import { getSupabaseEnv } from "./env"

const { url, anonKey } = getSupabaseEnv()

export const supabase = createBrowserClient<Database>(
  url || "https://example.supabase.co",
  anonKey || "public-anon-key"
)
