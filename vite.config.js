import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  // Render serves the app from the domain root. Set VITE_BASE_PATH explicitly
  // for hosts such as GitHub Pages that deploy under a subdirectory.
  base: process.env.VITE_BASE_PATH || '/',
}))
