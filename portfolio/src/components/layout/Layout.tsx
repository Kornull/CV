import { Outlet } from 'react-router-dom';

import Header from '../header';
import Modal from '../modal/modal';

const Layout = () => {
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
