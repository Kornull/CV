import { useAppDispatch, useAppSelector } from 'src/store/hooks';

import styles from './modal.module.scss';
import { setOpenModal } from 'src/store/cardSlice';
import { FormEvent, useEffect } from 'react';

const Modal = () => {
  const { isOpenModal } = useAppSelector((state) => state.cards);

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
      className={isOpenModal ? `${styles.modal} ${styles.activeModal}` : styles.modal}
      onClick={handleCloseModal}
    >
      <div
        className={
          isOpenModal ? `${styles.modalContent} ${styles.activeContent}` : styles.modalContent
        }
        onClick={(ev) => ev.stopPropagation()}
      ></div>
    </div>
  );
};

export default Modal;
