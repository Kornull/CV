import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
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
    scroll.scrollToTop();
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
              activeClass="active"
              to="summary"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              summary
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              className={styles.headerLink}
              onClick={handleCloseMenu}
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="tasks"
              to="skills"
              spy={true}
              smooth={true}
              offset={100}
              duration={100}
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
