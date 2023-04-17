import { NavLink } from 'react-router-dom';
// import { Link, animateScroll as scroll } from 'react-scroll';
import styles from '../Header.module.scss';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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
            <Link
              to="/#summary"
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              summary
            </Link>
          </li>
          <li>
            <Link
              to="/#skills"
              smooth={true}
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              to="/#tasks"
              smooth={true}
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              lorem
            </Link>
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
              to="/"
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              main
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
