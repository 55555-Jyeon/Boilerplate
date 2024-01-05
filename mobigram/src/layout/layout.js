import { Outlet } from "react-router-dom";
import Footer from "./parts/footer";
import ScrollTop from "./parts/components/scroll-top";

const Layout = () => {
  return (
    <>
      <Outlet />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Layout;
