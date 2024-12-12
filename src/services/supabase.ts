import { createClient } from "@supabase/supabase-js"
import { ENV_VARS } from "utils"

export const supabase = createClient(ENV_VARS.VITE_SUPABASE_URL, ENV_VARS.VITE_SUPABASE_KEY);