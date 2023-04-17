import { useTranslation } from 'react-i18next';

import { projectsData } from 'src/data/data';

import { LanguageQuery } from 'src/types';
import { ProjectType } from 'src/types';

import styles from './tasks.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Tasks = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<ProjectType[]>(projectsData.projects);

  const neImg = (img: string) => {
    return new URL(`/${img}`, import.meta.url).href;
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={styles.tasks}>
      <div className={styles.tasksContainer}>
        <h2 className={styles.tasksTitle} id="tasks">
          {t(LanguageQuery.PROJECTS)}
        </h2>

        <div className={styles.tasksCardsBlock}>
          <div className={styles.card}>
            <div className={styles.cardImageBlock}>
              <img
                className={styles.cardImage}
                src={neImg(data[0].image)}
                alt=""
              />
            </div>
            <h3 className={styles.cardTitle}>&#35; {data[0].title}</h3>
            <div className={styles.cardDescription}>
              <h2>
                {t(
                  `${LanguageQuery.DATA_PROJECT}.${data[0].id}.${LanguageQuery.DESCR}`
                )}
              </h2>
              <p>
                {' '}
                {t(LanguageQuery.STACK)} :{' '}
                {data[0].stack.slice(0, 2).toString()}
              </p>
              <div className={styles.cardBtnBlock}>
                <button className={styles.cardButton}>
                  {t(LanguageQuery.BTN_READ)}
                </button>
              </div>
            </div>

            <div className={styles.cardLinks}>
              <Link
                className={styles.cardLinksHref}
                target="_blank"
                to={data[0].link}
              >
                link
              </Link>
              <Link
                className={styles.cardLinksHref}
                target="_blank"
                to={data[0].github}
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
