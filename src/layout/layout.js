import { Outlet } from "react-router-dom";
import Footer from "./parts/footer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
