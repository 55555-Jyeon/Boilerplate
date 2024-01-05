import styled from "styled-components";
import { FlexCenter } from "../../../styles/common.style";
import MobilePhone from "../../../assets/main-slider/phone.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { SlideData } from "./slide-data";
import { useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  const renderSlides = SlideData.map((image, idx) => (
    <div key={idx}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));

  return (
    <Container>
      <Slides>
        <Carousel
          showArrows={false}
          autoPlay={true}
          autoPlaySpeed={2000}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          selectedItem={SlideData[currentIndex]}
          onChange={handleChange}
        >
          {renderSlides}
        </Carousel>
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
  padding-left: 15%;
  ${FlexCenter}
`;

const Iphone = styled.img`
  width: 36%;
  margin-top: 2%;
`;
const Slides = styled.div`
  position: absolute;
  width: 15%;
  margin: 0 0 0.8% 5.8%;
  transition: all ease-in-out;
`;
