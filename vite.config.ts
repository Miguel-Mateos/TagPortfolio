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
      '@Components': path.resolve(__dirname, './src/Components'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Hooks': path.resolve(__dirname, './src/hooks'),
      '@Store': path.resolve(__dirname, './src/store'),
      '@TagDs': path.resolve(__dirname, './src/tag'),
      '@Context': path.resolve(__dirname, './src/Context'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      branches: 75,
      functions: 60,
      lines: 75,
      statements: 75,
    }
  }
})
