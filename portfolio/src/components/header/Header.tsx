import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import { HeaderLogo } from './headerLogo';
import { HeaderNavigate } from './headerNavigate';

import styles from './Header.module.scss';

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <HeaderLogo />

        <div className={styles.headerBurger} onClick={toggleDrawer}>
          {
            <GiHamburgerMenu
              className={`${styles.headerBurgerIcon} ${
                isOpenMenu && styles.active
              }`}
            />
          }
        </div>
      </div>

      <HeaderNavigate openNavigate={isOpenMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default Header;
