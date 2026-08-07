import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Standalone preview only. When copied into kinz-ed, use that app's Vite/Webpack config.
  server: {
    port: 5173,
    open: true,
  },
})
