import { createPinia } from 'pinia'
import { createApp as create } from 'vue'
import createRouter from '@/router'
import i18nRegister from '@/plugins/i18n'
import application from './app.vue'

export function createApp() {
  // 从一个单文件组件中导入根组件
  const app = create(application)
  const store = createPinia()
  app.use(store)

  const i18n = i18nRegister(app)

  createRouter(app)

  return {
    app,
    i18n
  }
}

export default {}
