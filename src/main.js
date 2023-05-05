import '@/styles/index.scss'
// 要在main.js中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import '@/styles/tailwind.css'
import { AppName } from './config/index'
import { createApp } from './bootstrap/main'

// import { setDomFontSize } from './utils/dom'

// setDomFontSize()
const main = async function mountApp() {
  const { app } = createApp()
  app.mount(`#${AppName}`)
}

setTimeout(main)
