import type { ServerOptions } from "vite";

export default function createServerOpts(env): ServerOptions {
  return {
    host: true,
    port: env.VITE_PORT,
    open: env.VITE_OPEN,
    // cors: true,
    // Load proxy configuration from .env.development
    proxy: {
      "/admin": env.VITE_API_URL,
      "/auth": env.VITE_API_URL
    }
  };
}
