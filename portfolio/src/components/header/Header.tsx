import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { GiHamburgerMenu } from 'react-icons/gi';
import { ImEarth } from 'react-icons/im';

import { HeaderLogo } from './headerLogo';
import { HeaderNavigate } from './headerNavigate';

import styles from './Header.module.scss';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const [lang, setLang] = useState<string>('en');

  const handleLanguage = () => {
    if (lang === 'en') {
      i18n.changeLanguage('ru');
      setLang('ru');
      localStorage.setItem('lang', 'ru');
    }
    if (lang === 'ru') {
      i18n.changeLanguage('en');
      setLang('en');
      localStorage.setItem('lang', 'en');
    }
  };

  const toggleDrawer = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <HeaderLogo />

        <div className={styles.headerButtonsBlock}>
          <button className={styles.headerButtonLang} onClick={handleLanguage}>
            <ImEarth className={styles.headerButtonLangIcon} /> {t('lang')}
          </button>
          <div className={styles.headerBurger} onClick={toggleDrawer}>
            {
              <GiHamburgerMenu
                className={`${styles.headerBurgerIcon} ${
                  isOpenMenu && styles.active
                }`}
              />
            }
          </div>
        </div>
      </div>

      <HeaderNavigate openNavigate={isOpenMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default Header;
