import styled from "styled-components";
import OnePost from "../../components/one-post";
import { FlexCenter } from "../../styles/common.style";
import { useInfiniteQuery } from "react-query";
import { Api } from "../../api";
import { POST_QUERY_KEY } from "../../constants/query-key";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const containerRef = useRef();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const {
    data: postList,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [POST_QUERY_KEY.POST_LIST],
    queryFn: ({ pageParam = 1 }) => Api.fetchPostList(pageParam),
    getNextPageParam: (lastPage) => {
      const page = lastPage.page;
      if (lastPage.total_pages === page) return true;
      return page + 1;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
      console.log("fetchNextPage called!");
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    postList && (
      <Container ref={containerRef}>
        <Contents>
          {postList?.pages.map((page) => {
            return page?.map((post) =>
              post.map((el) => <OnePost key={el.id} post={el} user={el.User} />)
            );
          })}
        </Contents>
        <div ref={ref} />
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
