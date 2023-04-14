import { useEffect, useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import { HeaderLogo } from './headerLogo';

import styles from './Header.module.scss';

const aarr = [
  'lorem',
  '{list(anchor)}',
  '{list(anchor)}',
  '{list(anchor)}',
  '{list(anchor)}',
];
const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    console.log(isOpenMenu, 'use');
  }, [isOpenMenu]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <HeaderLogo />

        <div className={styles.headerBurger} onClick={toggleDrawer}>
          {<GiHamburgerMenu className={styles.headerBurgerIcon} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
