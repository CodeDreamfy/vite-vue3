import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import getPluginsList from './build/plugins'
import { include, exclude } from './build/optimize'

// process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
// export default ({ mode }) => {
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
//   return defineConfig({})
// })

const alias = {
  '@': fileURLToPath(new URL('./src', import.meta.url))
}
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PUBLIC_PATH,
  server: {
    open: true,
    port: 8080
  },
  // AutoImport 是否与Components 作用相同哦
  plugins: getPluginsList(),
  resolve: {
    alias
  },
  optimizeDeps: {
    include,
    exclude
  },
  build: {
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url))
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
