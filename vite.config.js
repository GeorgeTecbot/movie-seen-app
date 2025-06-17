import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // allow all .csb.app sub-domains (CodeSandbox)
    allowedHosts: ['.csb.app']
  }
})
