import { createApp as create } from 'vue'
import createRouter from '@/router'
import i18nRegister from '@/plugins/i18n'
import { setupStore } from '@/store'
import { useEcharts } from '@/plugins/echarts'

import application from './app.vue'

export function createApp() {
  // 从一个单文件组件中导入根组件
  const app = create(application)
  setupStore(app)
  useEcharts(app)
  const i18n = i18nRegister(app)

  createRouter(app)

  return {
    app,
    i18n
  }
}

export default {}
