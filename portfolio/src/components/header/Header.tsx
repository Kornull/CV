import { useEffect, useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import { HeaderLogo } from './headerLogo';

import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

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
          {
            <GiHamburgerMenu
              className={`${styles.headerBurgerIcon} ${
                isOpenMenu && styles.active
              }`}
            />
          }
        </div>
      </div>
      {isOpenMenu && (
        <div
          className={styles.headerNavigate}
          style={{ width: '100%', minHeight: '60px', background: '#0b3f8d' }}
        >
          <nav className={styles.headerNavigateContainer}>
            <ul className={styles.headerLinks}>
              <li>
                <NavLink to="#" className={styles.headerLink}>
                  Lorem, ipsum.
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className={styles.headerLink}>
                  Lorem, ipsum.
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className={styles.headerLink}>
                  Lorem, ipsum.
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className={styles.headerLink}>
                  Lorem, ipsum.
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className={styles.headerLink}>
                  Lorem, ipsum.
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
