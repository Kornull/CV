import { SkillsLine } from './skillsLine/skillsLine';

import styles from './skills.module.scss';

const Skills = () => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillContainer}>
        <SkillsLine />
        <h2>dddd</h2>
      </div>
    </div>
  );
};

export default Skills;
