import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk sizes
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
        }
      }
    },
    // Target modern browsers for smaller output
    target: 'es2020',
    // Increase chunk warning limit
    chunkSizeWarningLimit: 600,
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
  }
})
