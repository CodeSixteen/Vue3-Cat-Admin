import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { svgBuilder } from './src/icons/svg-builder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgBuilder('./src/icons/svg/', 'icon')
  ],
  server: {
    port: 5555
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/variables.scss';` // 全局使用 scss styles 变量
      }
    }
  },
})
