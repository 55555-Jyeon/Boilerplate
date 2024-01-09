import { useEffect, useState } from "react";

// Intersection Observer API

function createObserver() {
  let observer;

  let options = {
    root: null, // standard : viewport
    rootMargin: "0px",

    threshold: 0.1,
    hasNextPage: undefined,
    /* fetchNextPage : , */
  };
}

export const useIntersectionObserver = ({
  threshold,
  hasNextPage,
  fetchNextPage,
}) => {
  // 관찰할 요소
  const [target, setTarget] = useState(null);

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      //target이 화면에 관찰되고, 다음페이지가 있다면 다음페이지를 호출
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  useEffect(() => {
    if (!target) return;

    // intersection observer 인스턴스 생성
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    // 타겟 관찰 시작
    observer.observe(target);
    // 관찰 멈춤
    return () => observer.unobserve(target);
  }, [observerCallback, threshold, target]);

  return { setTarget };
};
