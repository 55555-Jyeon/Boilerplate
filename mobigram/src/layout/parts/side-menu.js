import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import styled from "styled-components";

const SideMenubar = () => {
  return (
    <Container>
      <SideNav>
        onSelect=
        {(selected) => {
          // Add your code here
        }}
        <SideNav.Nav></SideNav.Nav>
      </SideNav>
    </Container>
  );
};
export default SideMenubar;

const Container = styled.div``;
