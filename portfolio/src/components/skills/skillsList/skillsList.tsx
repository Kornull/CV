import styles from '../skills.module.scss';

const SkillArr = [
  'React.js',
  'Typescript',
  'JavaScript',
  'Redux Toolkit/RTK Query',
  'HTML',
  'CSS/SCSS.module',
  'REST API',
  'Jest/Vitest/React Testing Library',
  'Unit-testing',
  'Git',
  'Vite/Webpack',
  'Material UI',
];
export const SkillsList = () => {
  return (
    <div className={styles.skillBlock}>
      <ul className={styles.skillList}>
        {SkillArr.map((skill) => (
          <li key={skill}>
            <p className={styles.skillListElement}>{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
