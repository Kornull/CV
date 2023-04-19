import { NavLink } from 'react-router-dom';

import styles from '../header.module.scss';

type LogoProps = {
  closeMenu: (el: boolean) => void;
};

export const HeaderLogo = ({ closeMenu }: LogoProps) => {
  return (
    <NavLink to="/" className={styles.headerLogo} onClick={() => closeMenu(false)}>
      <h1 className={styles.headerTitle}>KornUll</h1>
    </NavLink>
  );
};
