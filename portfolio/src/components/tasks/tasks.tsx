import { useTranslation } from 'react-i18next';

import styles from './tasks.module.scss';
import { LanguageQuery } from 'src/types';

const Tasks = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.tasks}>
      <div className={styles.tasksContainer}>
        <h2 className={styles.tasksTitle}>{t(LanguageQuery.PROJECTS)}</h2>;
      </div>
    </div>
  );
};

export default Tasks;
