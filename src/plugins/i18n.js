// import messages from '@intlify/unplugin-vue-i18n/messages'
import dayjs from 'dayjs'
import { createI18n } from 'vue-i18n'
import { nextTick, reactive } from 'vue'
import elementZhCN from 'element-plus/dist/locale/zh-cn.mjs'
import elementEn from 'element-plus/dist/locale/en.mjs'
// { eager: true }
const modules = import.meta.glob('../../locales/*.json')

export const initialLocale = localStorage.locale ?? 'en'

export const SUPPORT_LOCALES = ['en', 'cn']

export const i18nLibraryMap = {
  cn: {
    element: elementZhCN,
    dayjs: 'zh-cn'
  },
  en: {
    element: elementEn,
    dayjs: 'en'
  }
}

export const elementUIOptions = reactive({
  size: 'small',
  // default lang
  locale: i18nLibraryMap[initialLocale]?.element
})

function toggleLibraryI18n(lang) {
  const { element, dayjs: dayjsLang } = i18nLibraryMap[lang]
  elementUIOptions.locale = element
  dayjs.locale(dayjsLang)
}
export async function loadLocaleMessages(i18n, locale) {
  try {
    // match(/([A-Za-z0-9-_]+)\./i)[1]
    // load locale messages with dynamic import
    const path = Object.keys(modules).find((pth) => pth.includes(locale))
    const messages = await modules[path]()
    // set locale and locale message
    i18n.global.setLocaleMessage(locale, messages.default)
    toggleLibraryI18n(locale)
  } catch (e) {
    throw new Error(e?.stack)
  }
  return nextTick()
}

export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === 'legacy') {
    // eslint-disable-next-line no-param-reassign
    i18n.global.locale = locale
  } else {
    // eslint-disable-next-line no-param-reassign
    i18n.global.locale.value = locale
  }
  loadLocaleMessages(i18n, locale)
  localStorage.locale = locale
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html').setAttribute('lang', locale)
}

export function setupI18n(
  options = {
    locale: initialLocale,
    fallbackLocale: 'en',
    legacy: false
  }
) {
  const i18n = createI18n(options)
  setI18nLanguage(i18n, options.locale)
  return i18n
}

export const i18n = setupI18n()

export default (app) => {
  dayjs.locale(initialLocale)
  app.use(i18n)
  return i18n
}
