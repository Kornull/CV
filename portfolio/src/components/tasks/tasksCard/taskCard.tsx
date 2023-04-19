import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TasksBtns } from '../tasksBtns';
import { imageNewUrl } from 'src/components/helper';

import {
  useAppDispatch,
  useAppSelector,
  setUpdateCards,
  setOpenModal,
  setDescrCard,
} from 'src/store';

import { LanguageQuery, ProjectType } from 'src/types';

import styles from './taskCcard.module.scss';
import LinksBlock from 'src/components/linksBlock';

export const TaskCard = () => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState<string>('all');

  const { cardsResult, cardCategories, isOpenModal } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  const handleChangeCategory = (ctg: string) => {
    setTasks(ctg);
  };

  const handleSetOpenModal = (card: ProjectType) => {
    dispatch(setDescrCard(card));
    dispatch(setOpenModal(!isOpenModal));
  };

  const setLineCheck = (strArr: string[]): string => {
    const str = strArr.join(', ');
    if (str.length > 90) return `${str.slice(0, 90)} ...`;
    return `${str}.`;
  };

  useEffect(() => {
    dispatch(setUpdateCards(tasks));
  }, [dispatch, tasks]);

  return (
    <>
      <TasksBtns
        handleChangeCategory={handleChangeCategory}
        task={tasks}
        category={cardCategories}
      />
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
                    {t(LanguageQuery.STACK)} : {setLineCheck(card.stack)}
                    <button className={styles.cardButton} onClick={() => handleSetOpenModal(card)}>
                      {t(LanguageQuery.BTN_MORE)}
                    </button>
                  </p>
                </div>
                <LinksBlock deploy={card.link} github={card.github} />
              </div>
            </div>
          ))
        : undefined}
    </>
  );
};
