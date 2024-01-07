import { Outlet } from "react-router-dom";
import Footer from "./parts/footer";
import ScrollTop from "./parts/components/scroll-top";
import SideMenubar from "./parts/side-menu";
import FriendList from "./parts/top-friend-list";

const MobiLayout = () => {
  return (
    <>
      <SideMenubar />
      <FriendList />
      <Outlet />
      {/* <ScrollTop /> */}
      <Footer />
    </>
  );
};

export default MobiLayout;
