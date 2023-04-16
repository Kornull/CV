import Marquee from 'react-fast-marquee';

import styles from '../skills.module.scss';

const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export const SkillsLine = () => {
  return (
    <div className={styles.skillMarguee}>
      <Marquee speed={40} gradientWidth={120}>
        {numArr.map((num) => (
          <img
            style={{ width: 'auto', height: '60px', marginRight: '20px' }}
            key={num}
            src={`logo/${num}.png`}
            alt=""
          />
        ))}
      </Marquee>
    </div>
  );
};
