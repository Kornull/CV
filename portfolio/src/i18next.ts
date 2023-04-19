import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from 'src/locales/ru/translation.json';
import en from 'src/locales/en/translation.json';

import { LocalStore } from './types';

if (!localStorage.getItem(LocalStore.LANG)) localStorage.setItem(LocalStore.LANG, LocalStore.EN);

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
  lng: localStorage.getItem(LocalStore.LANG) || LocalStore.EN,
  returnNull: false,
});

export default i18next;
