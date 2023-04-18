import { useAppDispatch, useAppSelector } from 'src/store/hooks';

import styles from './modal.module.scss';
import { setOpenModal } from 'src/store/cardSlice';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { imageNewUrl } from '../helper';
import { LanguageQuery } from 'src/types';
import LinksBlock from '../linksBlock/linksBlock';

const Modal = () => {
  const { t } = useTranslation();
  const { isOpenModal, cardDescr } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(setOpenModal(!isOpenModal));
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpenModal]);

  return (
    <div
      className={isOpenModal ? `${styles.modal} ${styles['active-modal']}` : styles.modal}
      onClick={handleCloseModal}
    >
      <div
        className={
          isOpenModal ? `${styles.modalContent} ${styles['active-content']}` : styles.modalContent
        }
        onClick={(ev) => ev.stopPropagation()}
      >
        {cardDescr && (
          <>
            <div className={styles.modalImgBlock}>
              <img src={imageNewUrl(cardDescr.image)} alt="" />
            </div>
            <div className={styles.modalDescription}>
              <h2 className={styles.modalDescriptionTitle}>{cardDescr.title}</h2>

              <article className={styles.modalDescriptionText}>
                <span className={styles.modalDescriptionTitleBlock}>
                  {t(`${LanguageQuery.DATA_PROJECT}.${cardDescr.id}.${LanguageQuery.DESCR}`)}
                </span>
              </article>

              <article className={styles.modalDescriptionText}>
                <span className={styles.modalDescriptionTitleBlock}>{t(LanguageQuery.STACK)}</span>{' '}
                {cardDescr.stack.join(', ')}
              </article>

              <article className={styles.modalDescriptionText}>
                <span className={styles.modalDescriptionTitleBlock}>
                  {t(LanguageQuery.WORK_TEXT)}
                </span>{' '}
                {t(`${LanguageQuery.DATA_PROJECT}.${cardDescr.id}.${LanguageQuery.WORK}`)}
              </article>
            </div>
            <div className={styles.modalDescriptionLinks}>
              <LinksBlock deploy={cardDescr.link} github={cardDescr.github} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
