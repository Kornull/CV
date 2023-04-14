import { NavLink } from 'react-router-dom';

import Logo from '/Kornull.svg';

import styles from '../Header.module.scss';

export const HeaderLogo = () => {
  return (
    <NavLink to="/" className={styles.headerLogo}>
      <svg className={styles.headerLogoIcon}>
        <use xlinkHref={`${Logo}#kornull`}></use>
      </svg>
    </NavLink>
  );
};
