/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Hooks': path.resolve(__dirname, './src/hooks'),
      '@Store': path.resolve(__dirname, './src/store'),
      '@TagDs': path.resolve(__dirname, './src/tag'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    // coverage: {
    //   branches: 80,
    //   functions: 80,
    //   lines: 80,
    //   statements: 80,
    // }
  }
})
