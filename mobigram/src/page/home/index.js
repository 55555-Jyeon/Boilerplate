import styled from "styled-components";
import SideMenubar from "../../layout/parts/side-menu";

const HomePage = () => {
  return (
    <Container>
      <SideMenubar />
      <Main>main page</Main>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;
const Main = styled.div`
  width: 100%;
  height: 2000px;
  background-color: aliceblue;
  margin-left: 335px;
`;
