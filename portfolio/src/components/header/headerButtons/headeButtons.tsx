import { GiHamburgerMenu } from 'react-icons/gi';
import { ImEarth } from 'react-icons/im';

import { useAppDispatch, useAppSelector, setOpenMenu } from 'src/store';

import styles from '../header.module.scss';

type ButtonsProps = {
  changeLang: () => void;
  lang: string;
};

export const HeaderButtons = ({ changeLang, lang }: ButtonsProps) => {
  const { isOpenNavigate } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  const setOpenNavigate = () => {
    dispatch(setOpenMenu(!isOpenNavigate));
  };

  return (
    <div className={styles.headerButtonsBlock}>
      <button className={styles.headerButtonLang} type="button" onClick={changeLang}>
        <ImEarth className={styles.headerButtonLangIcon} />
        {lang}
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
