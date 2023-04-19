import { useEffect } from 'react';

import { setOpenMenu, useAppDispatch, useAppSelector } from 'src/store';

import styles from './shadow.module.scss';

const Shadow = () => {
  const { isOpenNavigate } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  const handleOpenMenu = (): void => {
    dispatch(setOpenMenu(false));
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    if (isOpenNavigate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpenNavigate]);

  return (
    <div
      className={isOpenNavigate ? `${styles.shadow} ${styles['active-shadow']}` : styles.shadow}
      onClick={handleOpenMenu}
    ></div>
  );
};

export default Shadow;
