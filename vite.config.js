import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api/dolar': {
        target: 'https://mindicador.cl/api/dolar',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/dolar/, '')
      },
      '/api/uf': {
        target: 'https://mindicador.cl/api/uf',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/uf/, '')
      },
      '/api/utm': {
        target: 'https://mindicador.cl/api/utm',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/utm/, '')
      },
      '/api/ipc': {
        target: 'https://mindicador.cl/api/ipc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ipc/, '')
      },
      '/api': {
        target: 'https://mindicador.cl/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
