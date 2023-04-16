import { SkillsLine } from './skillsLine';
import { SkillsList } from './skillsList';

import styles from './skills.module.scss';

const Skills = () => {
  return (
    <div className={styles.skill} id={'skills'}>
      <div className={styles.skillContainer}>
        <h2 className={styles.skillTitle}>skills</h2>
        <SkillsLine />
        <SkillsList />
      </div>
    </div>
  );
};

export default Skills;
