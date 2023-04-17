import { skillTitleArray } from 'src/constants';

import styles from '../skills.module.scss';
import { useEffect } from 'react';

export const SkillsList = () => {
  useEffect(() => {
    console.log('skiills');
  }, []);

  return (
    <div className={styles.skillBlock}>
      <ul className={styles.skillList}>
        {skillTitleArray.map((skill) => (
          <li key={skill}>
            <p className={styles.skillListElement}>{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
