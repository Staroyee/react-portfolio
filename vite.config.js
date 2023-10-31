// Import necessary modules from Vite and plugins.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define the Vite configuration using the exported function.
export default defineConfig({
  // Use the 'react' plugin to enable React support.
  plugins: [react()],
  // Configure the development server settings.
  server: {
    // Set the port for the development server to 3000.
    port: 3000,
    // Automatically open the browser when the development server starts.
    open: true
  }
})
