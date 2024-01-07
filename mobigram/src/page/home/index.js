import styled from "styled-components";
import OnePost from "../../components/one-post";
import { FlexJustifyCenter } from "../../styles/common.style";

const HomePage = () => {
  return (
    <Container>
      <Contents>
        <OnePost />
      </Contents>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: calc(100% - 335px);
`;
const Contents = styled.div`
  width: 100%;
  height: 2000px;
  margin-left: 335px;
  ${FlexJustifyCenter}
`;
