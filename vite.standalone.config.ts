/// <reference types="vite/client" />

// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    origin: 'http://localhost:5173',
    open: 'http://localhost:5173'
  },
  envDir: './src/',
  resolve: {
    alias: {
      '@': '/src' //fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: ['documents']
  },
  build: {
    cssCodeSplit: false,
    sourcemap: false,
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
