import Marquee from 'react-fast-marquee';

import { skillNumberImgArray } from 'src/constants';

import styles from '../skills.module.scss';

export const SkillsLine = () => {
  const imageNewUrl = (num: number): string => {
    return new URL(`/src/assets/logo/${num}.png`, import.meta.url).href;
  };

  return (
    <div className={styles.skillMarguee}>
      <Marquee speed={40} gradientWidth={120}>
        {skillNumberImgArray.map((num) => (
          <img
            key={num}
            className={styles.skillMargueeImg}
            src={imageNewUrl(num)}
            alt=""
          />
        ))}
      </Marquee>
    </div>
  );
};
