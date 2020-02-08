import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translations from 'translations'

i18n.use(initReactI18next).init({
  resources: translations,
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false,
  },
})

i18n.languages = ['en', 'es']

export default i18n
