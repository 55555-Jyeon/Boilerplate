import { useCallback, useEffect, useState } from "react";
import throttle from "lodash/throttle";

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
  root,
  rootMargin = "0px",
  threshold = 0.5,
  hasNextPage,
  fetchNextPage,
  onIntersect,
}) => {
  // 관찰할 요소
  const [target, setTarget] = useState(null);

  // const observerCallback = (entries) => {
  //   entries.forEach((entry) => {
  //     //target이 화면에 관찰되고, 다음페이지가 있다면 다음페이지를 호출
  //     if (entry.isIntersecting && hasNextPage) {
  //       fetchNextPage();
  //     }
  //   });
  // };

  //useEffect(() => {
  //  if (!target) return;
  //
  //  // intersection observer 인스턴스 생성
  //  const observer = new IntersectionObserver(observerCallback, {
  //    threshold,
  //  });
  //
  //  // 타겟 관찰 시작
  //  observer.observe(target);
  //  // 관찰 멈춤
  //  return () => observer.unobserve(target);
  //}, [observerCallback, threshold, target]);

  const IntersectionObserverCallback = useCallback(
    throttle(async ([entry], io) => {
      if (entry.isIntersecting) {
        document.body.style.overflow = "hidden";
        io.unobserve(entry.target);
        await onIntersect();
        await io.observe(entry.target);
        return (document.body.style.overflow = "auto");
      }
    }, 1000),
    []
  );

  useEffect(() => {
    if (!target) return;
    // intersection observer 인스턴스 생성
    const IntersectionObserver = new IntersectionObserver(
      IntersectionObserverCallback,
      {
        root,
        rootMargin,
        threshold,
      }
    );
    // 타겟 관찰 시작
    IntersectionObserver.observe(target);
    return () => IntersectionObserver.disconnect();
  }, [target, root, rootMargin, threshold, onIntersect]);

  return { setTarget };
};
