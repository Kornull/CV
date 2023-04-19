import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { LanguageQuery } from 'src/types';

import Img from '/src/assets/not.webp';

import styles from './notFoundPage.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.not}>
      <div className={styles.notBlock}>
        <h1 className={styles.notBlockTitle}>
          <img src={Img} alt="" />
        </h1>
        <p className={styles.notBlockText}>
          {t(LanguageQuery.NOT)}{' '}
          <NavLink className={styles.notBlockLink} to="/">
            {t(`${LanguageQuery.HERE}.`)}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
