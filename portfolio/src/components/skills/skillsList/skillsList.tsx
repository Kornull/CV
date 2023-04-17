import { skillTitleArray } from 'src/constants';

import styles from '../skills.module.scss';

export const SkillsList = () => {
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
