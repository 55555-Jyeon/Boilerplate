import styled from "styled-components";

const SearchPage = () => {
  return (
    <Container>
      <Contents>search page</Contents>
    </Container>
  );
};
export default SearchPage;

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Contents = styled.div`
  width: 100%;
  height: 2000px;
  background-color: lightpink;
`;
