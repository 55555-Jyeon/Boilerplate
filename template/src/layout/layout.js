import { Outlet } from 'react-router-dom';
import Header from './parts/header';
import Footer from './parts/footer';
import ScrollTop from './parts/components/scroll-top';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Layout;
