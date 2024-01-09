import styled from "styled-components";
import OnePost from "../../components/one-post";
import { FlexCenter } from "../../styles/common.style";
import { useInfiniteQuery, useQuery } from "react-query";
import { Api } from "../../api";
import { POST_QUERY_KEY } from "../../constants/query-key";
import { useIntersectionObserver } from "../../hooks/use-Intersection-observer";

const HomePage = () => {
  // Queries
  const {
    data: postList,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [POST_QUERY_KEY.POST_LIST],
    queryFn: ({ pageParam = 1 }) => Api.getPostList(pageParam),

    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.data.length === 0 ? undefined : nextPage;
    },
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.data),
      pageParams: data.pageParams,
    }),
  });
  // 커스텀 훅에 hasNextPage와 fetchNextPage를 넣어 setTarget을 받아옵니다.
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  // const { data: productList, fetchNextPage } = useInfiniteQuery(
  //   [PRODUCT_QUERY_KEY.MORE_PRODUCT_LIST, saleStatus],
  //   ({ pageParam = 1 }) => Api.getUsedOrFreeProduct(pageParam, saleStatus),
  //   {
  //     getNextPageParam: (lastPage) => {
  //       return (
  //         lastPage.pagination.curPage < lastPage.pagination.totalPage &&
  //         lastPage.pagination.curPage + 1
  //       );
  //     },
  //   }

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
        <div ref={setTarget} />
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
