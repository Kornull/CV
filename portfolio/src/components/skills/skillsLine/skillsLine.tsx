import Marquee from 'react-fast-marquee';

import { skillNumberImgArray } from 'src/constants';
import { imageNewUrl } from 'src/components/helper';

import styles from '../skills.module.scss';

export const SkillsLine = () => {
  return (
    <div className={styles.skillMarguee}>
      <Marquee speed={40} gradientWidth={120}>
        {skillNumberImgArray.map((num) => (
          <img key={num} className={styles.skillMargueeImg} src={imageNewUrl(num)} alt="" />
        ))}
      </Marquee>
    </div>
  );
};
