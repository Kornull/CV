import { NavLink } from 'react-router-dom';

import styles from '../Header.module.scss';

export const HeaderLogo = () => {
  return (
    <NavLink to="/" className={styles.headerLogo}>
      <h1 className={styles.headerTitle}>KornUll</h1>
    </NavLink>
  );
};
