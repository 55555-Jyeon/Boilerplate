import styled from "styled-components";
import { LOGO } from "../../assets";
import { FlexAlignCenter, FlexCenter } from "../../styles/common.style";
import { useNavigate } from "react-router-dom";
import { MENU_LIST } from "../../constants/navbar";
import { useState } from "react";

const SideMenuBar = () => {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);

  return (
    <Container>
      <MenuBar>
        <Logo src={LOGO.logo} />
        {MENU_LIST.map((menu, idx) => {
          return (
            <li key={idx} onClick={() => navigate(menu.route)}>
              <Icon src={menu.icon} />
              <a href={menu.route}>{menu.title}</a>
            </li>
          );
        })}
      </MenuBar>
      <hiddenContainer>짜잔</hiddenContainer>
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
  padding: 0;

  & > li {
    list-style: none;
    width: 304px;
    height: 42px;
    margin: 19px 0;
    ${FlexAlignCenter}
    transition: all ease .3s;

    &:last-of-type {
      position: absolute;
      bottom: 24px;
    }
    &:hover {
      background-color: rgba(202, 202, 202, 0.2);
      border-radius: 10px;
    }

    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS["black"]};
      font-size: ${({ theme }) => theme.FONT_SIZE["medium"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    }
  }
`;

const hiddenContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 397px;
  height: 100vh;
  background-color: rgba(204, 204, 255, 0.2);
  border-radius: 20px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const Logo = styled.img`
  position: relative;
  left: -15%;
  width: 120px;
  margin: 40px 0 60px;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 26px 0 12px;
  padding-left: 20px;
`;
