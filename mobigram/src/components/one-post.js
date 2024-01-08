import styled from "styled-components";
import { FlexAlignCenter, FlexCenter, FlexLeft } from "../styles/common.style";
import { PostIcon } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

const OnePost = () => {
  return (
    <Container>
      <Header>
        <UserInfo>
          {/*  <img src={PostIcon.defaultProfile} /> */}
          <img src={""} />
          <div>
            <span>{}</span>
            <span>{}</span>
          </div>
        </UserInfo>
        <img src={PostIcon.more} />
      </Header>
      <ImageBox>
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          className="mySwiper"
        >
          {/* {mock.postImages[0].map((_, idx) => {
            <SwiperSlide key={idx} data-hash={idx}>
              {mock.postImages}
            </SwiperSlide>;
          })} */}
          <SwiperSlide data-hash="slide1">Slide 1</SwiperSlide>
          <SwiperSlide data-hash="slide2">Slide 2</SwiperSlide>
          <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
          <SwiperSlide data-hash="slide4">Slide 4</SwiperSlide>
          <SwiperSlide data-hash="slide5">Slide 5</SwiperSlide>
        </Swiper>
      </ImageBox>
      <Icons>
        <div>
          <img src={PostIcon.like} />
          <img src={PostIcon.comment} />
          <img src={PostIcon.send} />
        </div>
        <div>
          <img src={PostIcon.save} />
        </div>
      </Icons>
      <TextBox>
        <div>
          <p>Username</p>
          <p>the first sentence of the contents</p>
        </div>
        <div>
          <span>more</span>
          <span>view all 00 comments</span>
        </div>
        <span>3 days ago</span>
      </TextBox>
    </Container>
  );
};
export default OnePost;

const Container = styled.div`
  position: relative;
  width: 470px;
  height: fit-content;
  ${FlexCenter}
  flex-direction: column;
  margin: 82px 0;
`;

const Header = styled.div`
  width: 100%;
  height: 56px;
  ${FlexAlignCenter}
  justify-content: space-between;

  // more icon
  & > img {
    width: 20px;
    margin: 0 12px;
  }
`;
const UserInfo = styled.div`
  ${FlexAlignCenter}
  flex-direction: row;
  height: 100%;
  & > img {
    width: 32px;
    margin: 0 12px;
  }
  & > div {
    ${FlexLeft}

    & > span:nth-of-type(1) {
      font-size: ${({ theme }) => theme.FONT_SIZE["small"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    }
    & > span:nth-of-type(2) {
      font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
    }
  }
`;
const ImageBox = styled.div`
  width: 100%;
  height: 470px;
  ${FlexCenter}
  background-color: #fafafa;

  // swiper
  & > div {
    &.swiper-button-prev:after,
    &.swiper-button-next:after {
      /* font family 로 아이콘 사용 중 */
    }

    // slide indicators (pagination)
    &.swiper-pagination {
      & > span {
        &.swiper-pagination-bullet-active {
          background-color: ${({ theme }) => theme.COLORS["white"]};
        }
      }
    }
  }
`;
const Icons = styled.div`
  width: 100%;
  height: 54px;
  ${FlexAlignCenter}
  justify-content: space-between;

  & > div {
    ${FlexCenter}
    & > img {
      width: 20px;
      margin: 0 14px;
    }
  }
`;
const TextBox = styled.div`
  width: 100%;
  height: 152px;
  overflow: hidden;

  & > div {
    height: calc((100% - 20px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  & > div:nth-of-type(1) {
    ${FlexLeft}
    & > p {
      font-size: ${({ theme }) => theme.FONT_SIZE["small"]};
      &:nth-of-type(1) {
        margin: 6px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
      }
      &:nth-of-type(2) {
        margin: 0 6px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
      }
    }
  }

  & > div:nth-of-type(2) {
    ${FlexLeft}
    span {
      margin: 6px;
      font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
      color: ${({ theme }) => theme.COLORS.gray[500]};

      &:nth-of-type(1) {
      }

      &:nth-of-type(2) {
      }
    }
  }
  // written at
  & > span {
    position: absolute;
    bottom: 0;
    margin: 6px;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.gray[500]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
  }
`;
