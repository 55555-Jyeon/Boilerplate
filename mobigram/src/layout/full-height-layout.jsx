import { Outlet } from "react-router-dom";
import Footer from "./parts/footer";
import SideMenubar from "./parts/side-menubar";
import styled from "styled-components";

const FullLayout = () => {
  return (
    <>
      <SideMenubar />
      <Container>
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default FullLayout;

const Container = styled.div`
  width: auto(100% - 335px);
  margin-left: 335px;
  overflow-x: hidden;
`;
