import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tandem/', // Required for GitHub Pages (username.github.io/tandem)
})
