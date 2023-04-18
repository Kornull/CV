import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TasksBtns } from '../tasksBtns';
import { imageNewUrl } from 'src/components/helper';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setUpdateCards } from 'src/store/cardSlice';

import { LanguageQuery, ProjectType } from 'src/types';

import styles from './cards.module.scss';

export const Cards = () => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState<string>('all');

  const { cardsResult, cardCategories } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  const handleChageCategory = (ctg: string) => {
    setTasks(ctg);
  };

  useEffect(() => {
    dispatch(setUpdateCards(tasks));
  }, [tasks]);

  return (
    <>
      <TasksBtns handleChageCategory={handleChageCategory} task={tasks} category={cardCategories} />
      {cardsResult.length
        ? cardsResult.map((card: ProjectType, i: number) => (
            <div
              className={styles.card}
              key={card.id}
              style={i % 2 === 0 ? { flexDirection: 'row-reverse' } : undefined}
            >
              <div className={styles.cardImageBlock}>
                <img className={styles.cardImage} src={imageNewUrl(card.image)} alt="" />
              </div>

              <div className={styles.cardDescription}>
                <h3 className={styles.cardTitle}>{card.title}</h3>

                <div className={styles.cardText}>
                  <h2>{t(`${LanguageQuery.DATA_PROJECT}.${card.id}.${LanguageQuery.DESCR}`)}</h2>
                  <p>
                    {t(LanguageQuery.STACK)} : {card.stack.join(', ')}.
                    <button className={styles.cardButton}>{t(LanguageQuery.BTN_MORE)}</button>
                  </p>
                </div>

                <div className={styles.cardLinks}>
                  <Link className={styles.cardLinksHref} target="_blank" to={card.link}>
                    Link
                  </Link>
                  <Link className={styles.cardLinksHref} target="_blank" to={card.github}>
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))
        : undefined}
    </>
  );
};
