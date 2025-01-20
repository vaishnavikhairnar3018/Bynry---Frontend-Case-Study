import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 5173,
    strictPort: true, // Ensures the server doesn't switch ports automatically
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
})
