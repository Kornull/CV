import Image from '/public/foto.png';

import styles from './profile.module.scss';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.profile}>
      <div className={styles.profileContainer}>
        <div className={styles.profileSammary}>
          <p style={{ color: '#fff', fontSize: '24px' }}>{t('about')}</p>

          {/* <p style={{ color: '#fff', fontSize: '24px' }}>
            {`I have one year of experience in web application development (games, landing pages, SPA). A good knowledge of JavaScript basics allows me to quickly learn new technologies and add value to the team.
My aim is to improve my skills in order to develop a quality and a marketable product.`}
          </p>
          <p style={{ color: '#fff', fontSize: '24px' }}>
            {`Also, I developed many home projects, ranging from pure HTML, CSS and JavaScript landing pages and SPA applications using React, Typescript.
Acted as a team leader in a 3-person team during the final assignment of the JavaScript course.`}
          </p> */}
        </div>

        <div className={styles.profileFoto}>
          <img
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
