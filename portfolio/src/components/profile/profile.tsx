import Image from '/public/foto.png';

import styles from './profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileContainer}>
        <div className={styles.profileSammary}>
          <p style={{ color: '#fff', fontSize: '24px' }}>
            {`Hi, I am a Front-end developer. I have completed a course at the
            Rolling Scopes School. It wasn't an easy way, but I did it and I can
            say that it was cool. I did a lot of projects and gained a lot of
            knowledge. I met some interesting people and web development
            professionals. I tried my hand as a team leader in team development.
            Now it's time to move on and I'm looking for a company that will
            allow me to work with an interesting product and reach my full
            potential.`}
          </p>
          <p style={{ color: '#fff', fontSize: '24px' }}>
            {`I have one year of experience in web application development (games, landing pages, SPA). A good knowledge of JavaScript basics allows me to quickly learn new technologies and add value to the team.
My aim is to improve my skills in order to develop a quality and a marketable product.`}
          </p>
          <p style={{ color: '#fff', fontSize: '24px' }}>
            {`Also, I developed many home projects, ranging from pure HTML, CSS and JavaScript landing pages and SPA applications using React, Typescript.
Acted as a team leader in a 3-person team during the final assignment of the JavaScript course.`}
          </p>
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
