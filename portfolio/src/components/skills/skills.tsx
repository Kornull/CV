import { useTranslation } from 'react-i18next';

import { SkillsLine } from './skillsLine';
import { SkillsList } from './skillsList';

import { LanguageQuery } from 'src/types';

import styles from './skills.module.scss';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.skill} id={'skills'}>
      <div className={styles.skillContainer}>
        <h2 className={styles.skillTitle}>{t(LanguageQuery.SKILLS)}</h2>
        <SkillsLine />
        <SkillsList />
      </div>
    </div>
  );
};

export default Skills;
