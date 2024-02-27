import styled from "styled-components";
import { LOGO } from "../../assets";
import { FlexAlignCenter } from "../../styles/common.style";
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

  const onClickChangeEffect = (menu) => {
    if (menu.hasModal) {
      setHasModal(!hasModal);
      setHasMoreOptions(false);
    }
    if (menu.hasOptions) {
      setHasMoreOptions(!hasMoreOptions);
      setHasModal(false);
    }
    if (hasModal && menu.route) {
      navigate(menu.route);
      setHasModal(false);
      setHasMoreOptions(false);
    }
  };

  return (
    <Container>
      <MenuBar className={hasModal && "shrink"}>
        <Logo
          src={hasModal ? LOGO.logoIcon : LOGO.logo}
          className={hasModal && "shrink"}
        />
        {MENU_LIST.map((menu, idx) => {
          return (
            <>
              <li
                key={idx}
                onClick={() => onClickChangeEffect(menu)}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                className={hasModal && "shrink"}
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
        <MoreOptionList hasMoreOptions={hasMoreOptions} />
      </MenuBar>
    </Container>
  );
};
export default SideMenuBar;

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  position: relative;
  left: -24%;
  width: 120px;
  margin: 40px 0 60px;

  &.shrink {
    left: 0%;
    width: 36px;
    margin-bottom: 40px;
  }
`;

const MenuBar = styled.ul`
  ${FlexAlignCenter}
  justify-content: flex-start;
  flex-direction: column;
  width: 335px;
  height: 100vh;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  border-right: 1px solid ${({ theme }) => theme.COLORS.gray[300]};

  &.shrink {
    width: 75px;
  }

  & > li {
    position: relative;
    width: 304px;
    height: 42px;
    margin: 19px 15.5px;
    padding: 4px;
    ${FlexAlignCenter}
    transition: all ease-in-out .3s;
    cursor: pointer;

    &:last-of-type {
      bottom: -34%;
    }
    &:hover,
    &:active {
      background-color: rgba(202, 202, 202, 0.2);
      border-radius: 10px;
    }

    &.shrink {
      width: 65px;
      height: 65px;
      margin: 8px 0;
      padding: 0 10px;
    }

    & > a {
      color: ${({ theme }) => theme.COLORS["black"]};
      font-size: ${({ theme }) => theme.FONT_SIZE["medium"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    }
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 26px 0 12px;
  transition: "transform 0.3s ease-in-out";
`;
