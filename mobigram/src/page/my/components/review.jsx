import { faker } from "@faker-js/faker";
import shortid from "shortid";
import styled from "styled-components";

const ReviewTab = ({ user }) => {
  console.log("user?", user); // MyPosts 값이 존재
  console.log("posts?", user.MyPosts); // undefined

  // user에서는 MyPosts 목록이 보이는데 user.MyPosts로 가져오면 undefined가 찍힌다.
  // 그래서 임의로 posts 부분만 따로 가져와서 publishing 진행.
  const posts = Array(Math.floor(Math.random() * 30) + 1)
    .fill()
    .map(() => ({
      id: shortid.generate(),
      images: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => faker.image.url()),
      content: faker.lorem.paragraph(),
      location: faker.location.state(),
      isLiked: false,
      likedCount: Math.floor(Math.random() * 100),
    }));

  // if (!user.MyPosts || user.MyPosts.length === 0) return <p>No posts available.</p>;

  return (
    <Container>
      <GridContainer>
        {posts.map((post, index) => (
          <OnePost key={post.id} src={post.images[0]} />
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
