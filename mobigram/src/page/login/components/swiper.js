import styled from "styled-components";
import { FlexCenter } from "../../../styles/common.style";
import MobilePhone from "../../../assets/main-slider/phone.png";
// Import Swiper React components && styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import slide01 from "../../../assets/main-slider/01.svg";
import slide02 from "../../../assets/main-slider/02.svg";
import slide03 from "../../../assets/main-slider/03.svg";
import slide04 from "../../../assets/main-slider/04.svg";

const ImageSlider = () => {
  return (
    <Container>
      <Slides>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, EffectFade, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide01} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide02} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide03} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide04} />
          </SwiperSlide>
        </Swiper>
      </Slides>
      <Iphone src={MobilePhone} />
    </Container>
  );
};
export default ImageSlider;

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  padding-left: 15%;
  ${FlexCenter}
`;

const Iphone = styled.img`
  width: 386px;
  margin-top: 4%;
`;
const Slides = styled.div`
  position: absolute;

  // swiper position
  & > div {
    position: absolute;
    top: -222px;
    left: -66px;
  }
`;
