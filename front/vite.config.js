import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/DigitalBooking",
  plugins: [react()],
  test:{
    environment:"jsdom"
  }
})