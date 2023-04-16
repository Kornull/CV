import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Image from '/public/foto.png';
import styles from './profile.module.scss';

const Profile = () => {
  const { t } = useTranslation();
  const [isOpenText, setOpenText] = useState<boolean>(false);

  return (
    <div className={styles.profile}>
      <div className={styles.profileContainer}>
        <div className={styles.profileSammary}>
          <article className={styles.profileSammaryText}>
            {!isOpenText ? t('about') : t('about-full')}
            <button
              className={styles.profileSammaryTextButton}
              onClick={() => setOpenText(!isOpenText)}
            >
              {!isOpenText ? t('buttons.more') : t('buttons.close')}
            </button>
          </article>
        </div>

        <div className={styles.profileFoto}>
          <img
            className={styles.profileFotoImg}
            src={Image}
            alt=""
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
