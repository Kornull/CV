import { NavLink } from 'react-router-dom';

import { setOpenMenu, useAppDispatch } from 'src/store';

import styles from '../header.module.scss';

export const HeaderLogo = () => {
  const dispatch = useAppDispatch();

  const closeMenu = () => {
    dispatch(setOpenMenu(false));
  };

  return (
    <NavLink to="/" className={styles.headerLogo} onClick={closeMenu}>
      <h1 className={styles.headerTitle}>KornUll</h1>
    </NavLink>
  );
};
