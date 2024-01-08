import { Navigation } from "react-minimal-side-navigation";
import styled from "styled-components";
import { FlexAlignCenter, FlexCenter } from "../../styles/common.style";
import { useNavigate } from "react-router-dom";
import { LOGO, MenubarIcon } from "../../assets";

const SideMenubar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MenuBar>
        <Logo src={LOGO.logo} />
        <Navigation
          activeItemId="/home"
          onSelect={({ itemId }) => {
            navigate("/" + itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "home",
              elemBefore: () => <Icon src={MenubarIcon.home} />,
            },
            {
              title: "Explore",
              itemId: "explore",
              elemBefore: () => <Icon src={MenubarIcon.explore} />,
            },
            {
              title: "Message",
              itemId: "message",
              elemBefore: () => <Icon src={MenubarIcon.send} />,
            },
            {
              title: "Notifications",
              itemId: "notify",
              elemBefore: () => <Icon src={MenubarIcon.like} />,
            },
            {
              title: "Profile",
              itemId: "my-page",
              elemBefore: () => <Icon src={MenubarIcon.defaultProfile} />,
            },
            {
              title: "More",
              itemId: "more",
              elemBefore: () => <Icon src={MenubarIcon.more} />,
              /*               subNav: [
                {
                  title: "settings",
                  itemId: "",
                  elemBefore: () => <Icon src={""} />,
                },
              ], */
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
            // nav title
            & > span {
              height: 42px;
              display: inline-block;
              ${FlexAlignCenter}

              &.selected {
                font-weight: ${({ theme }) => theme.FONT_WEIGHT["semiBold"]};
              }
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
