import { NavLink } from 'react-router-dom';

import styles from '../Header.module.scss';
import React from 'react';

type NavigateProps = {
  openNavigate: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderNavigate = ({
  openNavigate,
  setOpenMenu,
}: NavigateProps) => {
  const handleCloseMenu = (): void => {
    setOpenMenu(false);
  };
  return (
    <div
      className={
        openNavigate
          ? `${styles.headerNavigate} ${styles.show}`
          : styles.headerNavigate
      }
    >
      <nav className={styles.headerNavigateContainer}>
        <ul className={styles.headerLinks}>
          <li>
            <NavLink
              to="/"
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              lorem
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ss"
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              lorem
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fd"
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              lorem
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ff"
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              lorem
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              lorem
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
