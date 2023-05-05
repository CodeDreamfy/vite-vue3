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
