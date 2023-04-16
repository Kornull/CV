import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from 'src/locales/ru/translation.json';
import en from 'src/locales/en/translation.json';

if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en');

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  // lng: localStorage.getItem('lang') || 'en',
  returnNull: false,
});

export default i18next;
