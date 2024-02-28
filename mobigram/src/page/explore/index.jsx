import styled from "styled-components";

const ExplorePage = () => {
  return (
    <Container>
      <Contents>explore page</Contents>
    </Container>
  );
};
export default ExplorePage;

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Contents = styled.div`
  width: 100%;
  height: 2000px;
  background-color: lightpink;
`;
