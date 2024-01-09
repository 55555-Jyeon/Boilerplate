import styled from "styled-components";
import OneUser from "../../components/one-user";
import { FlexCenter, PositionCenter } from "../../styles/common.style";
import { useRef, useState } from "react";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../components/carousel/Carousel.css"; // custom CSS

const FriendListSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const prependNumber = useRef(1);

  // Create slides
  const [slides, setSlides] = useState(
    Array.from({ length: 20 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  return (
    <Container>
      <Swiper
        modules={[Virtual, Navigation]}
        onSwiper={setSwiperRef}
        slidesPerView={8}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <OneUser />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default FriendListSlider;

const Container = styled.div`
  ${PositionCenter}
  position: relative;
  width: 630px;
  height: 107px;
  margin: 54px 13px 0;
  ${FlexCenter}
`;
