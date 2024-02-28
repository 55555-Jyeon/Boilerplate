import { Outlet } from "react-router-dom";
import Footer from "./parts/footer";
import SideMenubar from "./parts/side-menubar";
import FriendListSlider from "./parts/top-slider";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <>
      <SideMenubar />
      <Container>
        <FriendListSlider />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default MainLayout;

const Container = styled.div`
  width: auto(100% - 335px);
  margin-left: 335px;
  overflow-x: hidden;
`;
