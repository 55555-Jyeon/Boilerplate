import styled from "styled-components";
import { LOGO, MenubarIcon } from "../../assets";
import { FlexAlignCenter, FlexCenter } from "../../styles/common.style";
import { useNavigate } from "react-router-dom";
import { MENU_LIST } from "../../constants/navbar";
import { useState } from "react";
import HiddenContainer from "./hidden-container";
import MoreOptionList from "./more-options";

const SideMenuBar = () => {
  const navigate = useNavigate();

  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hasModal, setHasModal] = useState(false);
  const [hasMoreOptions, setHasMoreOptions] = useState(false);

  // icon : transform scale on hover
  const handleMouseEnter = (index) => {
    setHoveredMenu(index);
  };
  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  // show hidden menu on click
  const onShowHiddenMenu = () => {
    setHasModal(!hasModal);
  };

  return (
    <Container>
      <MenuBar>
        <Logo src={LOGO.logo} />
        {MENU_LIST.map((menu, idx) => {
          return (
            <>
              <li
                key={idx}
                onClick={() =>
                  menu.hasModal ? setHasModal(!hasModal) : navigate(menu.route)
                }
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon
                  src={menu.icon}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredMenu === idx ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <a href={menu.route}>{menu.title}</a>
              </li>
              <HiddenContainer hasModal={hasModal} />
            </>
          );
        })}
        <li
          onClick={() => setHasMoreOptions((prev) => !prev)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            src={MenubarIcon.menu}
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: hoveredMenu === 0 ? "scale(1.1)" : "scale(1)",
            }}
          />
          <a href="#">More</a>
        </li>
      </MenuBar>
      {hasMoreOptions && <MoreOptionList />}
    </Container>
  );
};
export default SideMenuBar;

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 335px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
`;
const MenuBar = styled.ul`
  ${FlexCenter}
  flex-direction: column;

  & > li {
    width: 304px;
    height: 42px;
    margin: 19px 0;
    ${FlexAlignCenter}
    transition: all ease .3s;
    cursor: pointer;

    &:last-of-type {
      position: absolute;
      bottom: 24px;
    }
    &:hover,
    &:active {
      background-color: rgba(202, 202, 202, 0.2);
      border-radius: 10px;
    }

    & > a {
      color: ${({ theme }) => theme.COLORS["black"]};
      font-size: ${({ theme }) => theme.FONT_SIZE["medium"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    }
  }
`;

const Logo = styled.img`
  position: relative;
  left: -24%;
  width: 120px;
  margin: 40px 0 60px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 26px 0 12px;
  transition: "transform 0.3s ease-in-out";
`;
