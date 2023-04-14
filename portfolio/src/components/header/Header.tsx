import { HeaderLogo } from './headerLogo';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <HeaderLogo />
        <div
          style={{ width: '56px', height: '56px', background: '#000' }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
