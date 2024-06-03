import { defineConfig } from 'vite'
import generateIcon from 'rollup-plugin-generate-icon'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './src/main.js'),
      }
    }
  },
  plugins: [
    generateIcon({
      logo: path.resolve(__dirname, './public/icon.png'),
    }),
  ],
})
