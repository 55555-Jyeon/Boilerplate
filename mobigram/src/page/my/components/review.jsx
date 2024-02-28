import styled from "styled-components";

const ReviewTab = ({ user }) => {
  const posts = user[0].MyPosts;
  if (!posts || posts.length === 0) return <p>No posts available.</p>;

  return (
    <Container>
      <GridContainer>
        {posts.map((post) => (
          <OnePost key={post.id} src={post.images[0]} post={post} />
        ))}
      </GridContainer>
    </Container>
  );
};
export default ReviewTab;

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 40px 0 100px;
`;

const OnePost = styled.img`
  place-items: center;
  width: 293px;
  height: 293px;
  background-color: aliceblue;
  cursor: pointer;
`;
