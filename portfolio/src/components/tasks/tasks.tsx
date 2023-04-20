import { useTranslation } from 'react-i18next';

import { TaskCard } from './tasksCard';

import { LanguageQuery } from 'src/types';

import styles from './tasks.module.scss';

const Tasks = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.tasks} id="tasks">
      <div className={styles.tasksContainer}>
        <h2 className={styles.tasksTitle}>{t(LanguageQuery.PROJECTS)}</h2>

        <div className={styles.tasksCardsBlock}>
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
