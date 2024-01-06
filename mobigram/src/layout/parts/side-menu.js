import { Navigation } from "react-minimal-side-navigation";
import styled from "styled-components";
import LOGO from "../../assets/logo.png";
import HOME from "../../assets/home.png";
import EXPLORE from "../../assets/explore.png";
import SEND from "../../assets/send.png";
import LIKE from "../../assets/like.png";
import PROFILE from "../../assets/default-profile.png";
import MORE from "../../assets/more.png";
import { FlexAlignCenter, FlexCenter } from "../../styles/common.style";

const SideMenubar = () => {
  return (
    <Container>
      <MenuBar onSelect={(selected) => console.log(selected)}>
        <Logo src={LOGO} />
        <Navigation
          onSelect={() => {}}
          items={[
            {
              title: "Home",
              itemId: "mobi/",
              elemBefore: () => <Icon src={HOME} />,
            },
            {
              title: "Explore",
              itemId: "mobi/explore",
              elemBefore: () => <Icon src={EXPLORE} />,
            },
            {
              title: "Message",
              itemId: "mobi/message",
              elemBefore: () => <Icon src={SEND} />,
            },
            {
              title: "Notifications",
              itemId: "mobi/notify",
              elemBefore: () => <Icon src={LIKE} />,
            },
            {
              title: "Profile",
              itemId: "mobi/my-page",
              elemBefore: () => <Icon src={PROFILE} />,
            },
            {
              title: "More",
              itemId: "",
              elemBefore: () => <Icon src={MORE} />,
            },
          ]}
        />
      </MenuBar>
    </Container>
  );
};
export default SideMenubar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  & > div {
    width: 335px;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS["white"]};
    box-shadow: 5px 5px 15px 5px rgba(202, 202, 202, 0.2);
    // menu
    & > nav {
      width: 304px;
      height: 42px;
      ${FlexCenter}
      flex-direction: column;
      margin-top: 150px;

      & > ul {
        list-style: none;
        width: 100%;
        height: 100%;

        & > li {
          width: 100%;
          height: 100%;
          border-radius: 50px;
          ${FlexAlignCenter}
          transition: all 0.3s ease;
          cursor: pointer;

          &:hover {
            background-color: rgba(202, 202, 202, 0.2);
          }

          & > div {
            padding-left: 24px;
            & > span {
              height: 42px;
              display: inline-block;
              ${FlexAlignCenter}
            }
          }
        }
      }
    }
  }
`;
const MenuBar = styled.div`
  padding-top: 40px;
`;
const Logo = styled.img`
  width: 160px;
  margin: 0 0 95px 58px;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 26px 0 12px;
`;
