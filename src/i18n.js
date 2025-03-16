import {createI18n} from 'vue-i18n';

const messages = {
  en: {
    welcome: "Welcome to Unifile",
    selectPath: "select path",
  },
  de: {
    welcome: "Willkommen bei Unifile",
    selectPath: "Pfad wählen",
  }
};

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'de', 
  fallbackLocale: 'en', 
  messages,
});

export default i18n;