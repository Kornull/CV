import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderLogo } from './headerLogo';
import { HeaderNavigate } from './headerNavigate';
import { HeaderButtons } from './headerButtons';

import styles from './Header.module.scss';
import { LanguageQuery } from 'src/types';

const Header = () => {
  const { i18n } = useTranslation();
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const [lang, setLang] = useState<string>(
    localStorage.getItem(LanguageQuery.LANG) || LanguageQuery.EN
  );

  const handleLanguageQuery = (): void => {
    if (lang === LanguageQuery.EN) {
      i18n.changeLanguage(LanguageQuery.RU);
      setLang(LanguageQuery.RU);
      localStorage.setItem(LanguageQuery.LANG, LanguageQuery.RU);
    }
    if (lang === LanguageQuery.RU) {
      i18n.changeLanguage(LanguageQuery.EN);
      setLang(LanguageQuery.EN);
      localStorage.setItem(LanguageQuery.LANG, LanguageQuery.EN);
    }
    setOpenMenu(false);
  };

  const toggleDrawer = (): void => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <HeaderLogo closeMenu={setOpenMenu} />

        <HeaderButtons
          openMenu={toggleDrawer}
          changeLang={handleLanguageQuery}
          isOpen={isOpenMenu}
        />
      </div>

      <HeaderNavigate openNavigate={isOpenMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default Header;
