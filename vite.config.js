import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // AGGIUNGI QUESTA RIGA 👇
  base: "/Tomato-Food-Del/",
  plugins: [react()],
})