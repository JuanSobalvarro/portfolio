import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig(() => {
  const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';

  return {
    base: isGitHubPages ? '/portfolio/' : '/',
    
    plugins: [react(), tailwindcss(), cloudflare()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      }
    },
    build: {
      outDir: 'dist',
      assetsInlineLimit: 0,
    }
  };
})