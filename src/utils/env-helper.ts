type EnvVariables = {
    VITE_SUPABASE_URL: string;
    VITE_SUPABASE_KEY: string;
    BASE_URL?: string;
    MODE: string;
    PROD: boolean;
    DEV: boolean;
}

export const ENV_VARS: EnvVariables = {
    VITE_SUPABASE_KEY: import.meta.env["VITE_SUPABASE_KEY"],
    VITE_SUPABASE_URL: import.meta.env["VITE_SUPABASE_URL"],
    BASE_URL:import.meta.env.BASE_URL,
    DEV: import.meta.env.DEV,
    MODE: import.meta.env.MODE,
    PROD: import.meta.env.PROD,
}
