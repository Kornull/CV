import styles from './skills.module.scss';
import Marquee from 'react-fast-marquee';
const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Skills = () => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillContainer}>
        <div className={styles.skillMarguee}>
          <Marquee speed={80}>
            {numArr.map((num) => (
              <img
                style={{ width: 'auto', height: '60px', marginRight: '20px' }}
                key={num}
                src={`src/assets/logo/${num}.png`}
                alt=""
              />
            ))}
            {numArr.map((num) => (
              <img
                style={{ width: 'auto', height: '60px', marginRight: '20px' }}
                key={num}
                src={`src/assets/logo/${num}.png`}
                alt=""
              />
            ))}
          </Marquee>
        </div>
        <h2>dddd</h2>
      </div>
    </div>
  );
};

export default Skills;
