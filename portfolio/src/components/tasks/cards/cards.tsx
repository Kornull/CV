import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { imageNewUrl } from 'src/components/helper';

import { LanguageQuery, ProjectType } from 'src/types';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setUpdateCards } from 'src/store/cardSlice';

import styles from './cards.module.scss';
import { useEffect, useState } from 'react';

export const Cards = () => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState<string>('react');

  const { cardsResult } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUpdateCards(tasks));
  }, [tasks]);

  return (
    <>
      {cardsResult.length
        ? cardsResult.map((card: ProjectType) => (
            <div className={styles.card} key={card.id}>
              <div className={styles.cardImageBlock}>
                <img
                  className={styles.cardImage}
                  src={imageNewUrl(card.image)}
                  alt=""
                />
              </div>
              <h3 className={styles.cardTitle}>&#35; {card.title}</h3>
              <div className={styles.cardDescription}>
                <h2>
                  {t(
                    `${LanguageQuery.DATA_PROJECT}.${card.id}.${LanguageQuery.DESCR}`
                  )}
                </h2>
                <p>
                  {' '}
                  {t(LanguageQuery.STACK)} : {card.stack.slice(0, 2).toString()}
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
                  to={card.link}
                >
                  link
                </Link>
                <Link
                  className={styles.cardLinksHref}
                  target="_blank"
                  to={card.github}
                >
                  GitHub
                </Link>
              </div>
            </div>
          ))
        : undefined}
    </>
  );
};
