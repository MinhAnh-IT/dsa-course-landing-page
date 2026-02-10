import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Tách React libraries thành chunk riêng
          'react-vendor': ['react', 'react-dom'],
        }
      }
    },
    // Giảm kích thước chunk warning threshold
    chunkSizeWarningLimit: 1000,
    // Enable minification with esbuild (faster than terser, no extra dependencies)
    minify: 'esbuild',
    // Remove console and debugger in production
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
