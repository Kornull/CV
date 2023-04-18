import { Outlet } from 'react-router-dom';

import Header from '../header';
import Modal from '../modal/modal';
import { useAppSelector } from 'src/store/hooks';

const Layout = () => {
  const { isOpenModal } = useAppSelector((state) => state.cards);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Modal />
    </>
  );
};

export default Layout;
