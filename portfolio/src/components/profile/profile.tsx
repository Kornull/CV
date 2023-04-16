import { ProfileSummary } from './profileSummary';

import Image from 'src/assets/foto.png';

import styles from './profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileContainer}>
        <ProfileSummary />

        <div className={styles.profileFoto}>
          <img className={styles.profileFotoImg} src={Image} alt="foto" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
