import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

import { LanguageQuery } from 'src/types';

import { useAppSelector, useAppDispatch, setOpenMenu } from 'src/store';

import styles from '../header.module.scss';

export const HeaderNavigate = () => {
  const { t } = useTranslation();
  const { isOpenNavigate } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  const handleCloseMenu = (): void => {
    dispatch(setOpenMenu(false));
  };

  return (
    <div
      className={isOpenNavigate ? `${styles.headerNavigate} ${styles.show}` : styles.headerNavigate}
    >
      <nav className={styles.headerNavigateContainer}>
        <ul className={styles.headerLinks}>
          <li>
            <Link to="/#summary" className={styles.headerLink} onClick={handleCloseMenu}>
              {t(LanguageQuery.SUMMARU)}
            </Link>
          </li>
          <li>
            <Link
              to="/#skills"
              smooth={true}
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              {t(LanguageQuery.SKILLS)}
            </Link>
          </li>
          <li>
            <Link
              to="/#tasks"
              smooth={true}
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              {t(LanguageQuery.PROJECTS)}
            </Link>
          </li>
          <li>
            <Link to="/#contacts" className={styles.headerLink} onClick={handleCloseMenu}>
              {t(LanguageQuery.CONTACTS)}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
