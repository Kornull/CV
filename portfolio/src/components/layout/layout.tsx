import { Outlet } from 'react-router-dom';

import Header from '../header';
import Modal from '../modal/modal';
import Shadow from '../shadow/shadow';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Modal />
      <Shadow />
    </>
  );
};

export default Layout;
