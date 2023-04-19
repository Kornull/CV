import { Outlet } from 'react-router-dom';

import Header from '../header';
import Modal from '../modal/modal';
import Footer from '../footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Modal />
    </>
  );
};

export default Layout;
