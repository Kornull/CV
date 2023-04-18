import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImEarth } from 'react-icons/im';

import { LanguageQuery } from 'src/types';

import styles from '../Header.module.scss';

type ButtonsProps = {
  isOpen: boolean;
  openMenu: () => void;
  changeLang: () => void;
};

export const HeaderButtons = ({ isOpen, openMenu, changeLang }: ButtonsProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.headerButtonsBlock}>
      <button className={styles.headerButtonLang} onClick={changeLang}>
        <ImEarth className={styles.headerButtonLangIcon} />
        {t(LanguageQuery.LANG)}
      </button>
      <div className={styles.headerBurger} onClick={openMenu}>
        {<GiHamburgerMenu className={`${styles.headerBurgerIcon} ${isOpen && styles.active}`} />}
      </div>
    </div>
  );
};
