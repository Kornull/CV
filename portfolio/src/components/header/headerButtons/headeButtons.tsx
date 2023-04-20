import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImEarth } from 'react-icons/im';

import { useAppDispatch, useAppSelector, setOpenMenu } from 'src/store';

import { LanguageQuery } from 'src/types';

import styles from '../header.module.scss';

type ButtonsProps = {
  changeLang: () => void;
};

export const HeaderButtons = ({ changeLang }: ButtonsProps) => {
  const { t } = useTranslation();
  const { isOpenNavigate } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  const setOpenNavigate = () => {
    dispatch(setOpenMenu(!isOpenNavigate));
  };

  return (
    <div className={styles.headerButtonsBlock}>
      <button className={styles.headerButtonLang} type="button" onClick={changeLang}>
        <ImEarth className={styles.headerButtonLangIcon} />
        {t(LanguageQuery.LANG)}
      </button>
      <button className={styles.headerBurger} type="button" onClick={setOpenNavigate}>
        {
          <GiHamburgerMenu
            className={`${styles.headerBurgerIcon} ${isOpenNavigate && styles.active}`}
          />
        }
      </button>
    </div>
  );
};
