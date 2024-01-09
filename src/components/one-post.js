import styled from "styled-components";
import { FlexAlignCenter, FlexCenter, FlexLeft } from "../styles/common.style";
import { PostIcon } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel/Carousel.css"; // custom CSS
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

const OnePost = ({ profileImg, username, location, postImg, createdAt }) => {
  console.log("post's Imgs", postImg);

  return (
    <Container>
      <Header>
        <UserInfo>
          {profileImg ? (
            <img src={profileImg} />
          ) : (
            <img src={PostIcon.defaultProfile} />
          )}

          <div>
            <span>{username}</span>
            <span>{location}</span>
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
          {/* {postImg &&
            postImg.map((_, idx) => {
              <SwiperSlide key={idx} data-hash={`slide + ${idx + 1}`}>
                <Image src={postImg[0]} />
              </SwiperSlide>;
            })} */}
          <SwiperSlide data-hash="slide1">
            <Image src={postImg[0]} />
          </SwiperSlide>
          <SwiperSlide data-hash="slide2">
            <Image src={postImg[1]} />
          </SwiperSlide>
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
    height: 32px;
    margin: 0 12px;
    border-radius: 50%;
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
  width: 470px;
  height: 470px;
  ${FlexCenter}
  background-color: #fafafa;
`;
const Image = styled.img`
  width: 470px;
  height: 470px;
  overflow: hidden;
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
