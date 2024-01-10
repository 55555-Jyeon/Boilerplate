import styled from "styled-components";
import OnePost from "../../components/one-post";
import { FlexCenter } from "../../styles/common.style";
import { useInfiniteQuery, useQuery } from "react-query";
import { Api } from "../../api";
import { POST_QUERY_KEY } from "../../constants/query-key";
import { useEffect } from "react";

const HomePage = () => {
  // Queries
  // const { data: postList } = useQuery({ queryKey: [POST_QUERY_KEY.POST_LIST], queryFn: () => Api.getPostList()});
  const { data: postList, fetchNextPage } = useInfiniteQuery({
    queryKey: [POST_QUERY_KEY.POST_LIST],
    queryFn: ({ pageParam = 1 }) => Api.fetchPostList(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const page = lastPage.page;
      if (lastPage.total_pages === page) return false;
      return page + 1;
    },
  });

  // 스크롤 최하단 시 fetchNextPage실행
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) return fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // 커스텀 훅에 hasNextPage와 fetchNextPage를 넣어 setTarget을 받아옵니다.
  // const { setTarget } = useIntersectionObserver({ hasNextPage, fetchNextPage });

  return (
    postList && (
      <Container>
        <Contents>
          {postList?.pages.map((page) => {
            return page?.map((post) =>
              post.map((el) => (
                <OnePost
                  key={el.id}
                  user={el.User.nickName}
                  profileImg={el.User.profileImg}
                  location={el.location}
                  postImg={el.postImages}
                  createdAt={el.createdAt}
                />
              ))
            );
          })}
        </Contents>
        {/* <div ref={setTarget} /> */}
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
