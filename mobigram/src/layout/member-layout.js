import { Outlet } from "react-router-dom";
import Footer from "./parts/footer";
import SideMenubar from "./parts/side-menu";
import FriendListSlider from "./parts/top-slider";
import styled from "styled-components";

const MobiLayout = () => {
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

export default MobiLayout;

const Container = styled.div`
  width: auto(100% - 335px);
  margin-left: 335px;
  overflow-x: hidden;
`;
