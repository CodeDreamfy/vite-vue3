import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import { i18n, setI18nLanguage } from '@/modules/i18n'

export const useI18nStore = defineStore('i18n', () => {
  const { locale } = useI18n()
  function toggleLocale(newLang) {
    locale.value = newLang
    localStorage.setItem('lang', newLang)
    setI18nLanguage(i18n, newLang)
  }

  return { locale, toggleLocale }
})

export default {}
