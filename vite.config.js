import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(path.resolve(), './src'),
      $lib: path.resolve('./src/lib')
    },
  },
})
