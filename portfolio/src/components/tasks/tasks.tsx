import { useTranslation } from 'react-i18next';

import { Cards } from './cards';

import { LanguageQuery } from 'src/types';

import styles from './tasks.module.scss';

const Tasks = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.tasks} id="tasks">
      <div className={styles.tasksContainer}>
        <h2 className={styles.tasksTitle}>{t(LanguageQuery.PROJECTS)}</h2>

        <div className={styles.tasksCardsBlock}>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
