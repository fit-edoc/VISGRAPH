import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:" https://a56422b4f7ca.ngrok-free.app",
    allowedHosts:true,
  }
})
