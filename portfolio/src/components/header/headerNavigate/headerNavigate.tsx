import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

import { LanguageQuery } from 'src/types';

import styles from '../header.module.scss';

type NavigateProps = {
  openNavigate: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderNavigate = ({ openNavigate, setOpenMenu }: NavigateProps) => {
  const { t } = useTranslation();

  const handleCloseMenu = (): void => {
    setOpenMenu(false);
  };

  return (
    <div
      className={openNavigate ? `${styles.headerNavigate} ${styles.show}` : styles.headerNavigate}
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