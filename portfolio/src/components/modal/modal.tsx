import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, setOpenModal } from 'src/store';
import { useTranslation } from 'react-i18next';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { imageNewUrl } from '../helper';
import LinksBlock from '../linksBlock/linksBlock';

import { LanguageQuery } from 'src/types';

import styles from './modal.module.scss';

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
        <button className={styles.modalClose} onClick={handleCloseModal}>
          <AiOutlineCloseCircle className={styles.modalCloseIcon} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
