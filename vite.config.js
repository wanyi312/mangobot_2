import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToViewport from 'postcss-px-to-viewport-8-plugin'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // 监听所有网络接口
    port: 5173,
    proxy: {
      // 联系表单等接口：开发环境将 /api 转发到邮件服务
      '/api': {
        target: 'https://email.mangobot.org',
        changeOrigin: true
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        // 桌面端样式：按 1920 设计稿将 px 转为 vw（产品页移动端另有手写 440 基准 vw）
        postCssPxToViewport({
          unitToConvert: 'px',
          viewportWidth: 1920, // 根据你的 Figma 设计稿宽度设置（通常是 1440）
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: [],
        })
      ]
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})