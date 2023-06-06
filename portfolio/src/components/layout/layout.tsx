import { Outlet } from 'react-router-dom';

import Header from '../header';
import Modal from '../modal/modal';
import Shadow from '../shadow/shadow';
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
      <Shadow />
    </>
  );
};

export default Layout;
