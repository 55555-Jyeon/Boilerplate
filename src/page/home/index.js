import styled from "styled-components";
import OnePost from "../../components/one-post";
import { FlexCenter } from "../../styles/common.style";
import { useQuery } from "react-query";
import { Api } from "../../api";
import { POST_QUERY_KEY } from "../../constants/query-key";

const HomePage = () => {
  // Queries
  const { data: postList } = useQuery({
    queryKey: [POST_QUERY_KEY.POST_LIST],
    queryFn: () => Api.getPostList(),
  });

  /*  console.log("postList", postList); */

  return (
    postList && (
      <Container>
        <Contents>
          {postList[0].map((post, idx) => (
            <OnePost
              key={idx}
              username={post.User.nickName}
              profileImg={post.User.profileImg}
              location={post.location}
              postImg={post.postImages}
              createdAt={post.createdAt}
            />
          ))}
        </Contents>
      </Container>
    )
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
`;
const Contents = styled.div`
  width: 100%;
  ${FlexCenter}
  flex-direction: column;
`;
