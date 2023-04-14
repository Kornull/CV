import { Link } from 'react-router-dom';

import styles from '../Header.module.scss';

type NavigateProps = {
  openNavigate: boolean;
};

export const HeaderNavigate = ({ openNavigate }: NavigateProps) => {
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
            <Link to="/" className={styles.headerLink}>
              Lorem, ipsum.
            </Link>
          </li>
          <li>
            <Link to="/ss" className={styles.headerLink}>
              Lorem, ipsum.
            </Link>
          </li>
          <li>
            <Link to="/fd" className={styles.headerLink}>
              Lorem, ipsum.
            </Link>
          </li>
          <li>
            <Link to="/ff" className={styles.headerLink}>
              Lorem, ipsum.
            </Link>
          </li>
          <li>
            <Link to="" className={styles.headerLink}>
              Lorem, ipsum.
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
