import styled from "styled-components";

const MyPage = () => {
  return (
    <Container>
      <Contents>my page</Contents>
    </Container>
  );
};
export default MyPage;

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

const Contents = styled.div`
  width: 100%;
  height: 2000px;
  background-color: lavender;
  margin-left: 335px;
`;
