import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderLogo } from './headerLogo';
import { HeaderNavigate } from './headerNavigate';
import { HeaderButtons } from './headerButtons';
import { setOpenMenu, useAppDispatch } from 'src/store';

import { LanguageQuery, LocalStore } from 'src/types';

import styles from './header.module.scss';

const Header = () => {
  const langResult: string = localStorage.getItem(LocalStore.LANG) || LocalStore.EN;

  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const [lang, setLang] = useState<string>(langResult);

  const handleLanguageQuery = (): void => {
    if (lang === LanguageQuery.EN) {
      i18n.changeLanguage(LanguageQuery.RU);
      setLang(LanguageQuery.RU);
      localStorage.setItem(LocalStore.LANG, LanguageQuery.RU);
    }
    if (lang === LanguageQuery.RU) {
      i18n.changeLanguage(LanguageQuery.EN);
      setLang(LanguageQuery.EN);
      localStorage.setItem(LocalStore.LANG, LanguageQuery.EN);
    }
    dispatch(setOpenMenu(false));
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <HeaderLogo />

        <HeaderButtons changeLang={handleLanguageQuery} />
      </div>

      <HeaderNavigate />
    </header>
  );
};

export default Header;
