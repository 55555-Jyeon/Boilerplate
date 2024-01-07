import styled from "styled-components";

const ChattingPage = () => {
  return (
    <Container>
      <Contents>chatting page</Contents>
    </Container>
  );
};
export default ChattingPage;

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

const Contents = styled.div`
  width: 100%;
  height: 2000px;
  background-color: salmon;
  margin-left: 335px;
`;
