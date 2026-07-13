import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  base: '/trading/',
  plugins: [react()],
  server: {
    host: true,
    port: 7028
  },
  preview: {
    host: true,
    port: 7028
  }
})
