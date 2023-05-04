// 引入 tailwindcss
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import '@/styles/index.scss'
import { AppName } from './config/index'
import { createApp } from './bootstrap/main'

// import { setDomFontSize } from './utils/dom'

// setDomFontSize()
const main = async function () {
  const { app } = createApp()
  app.mount(`#${AppName}`)
}

setTimeout(main)
