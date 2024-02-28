import styled from "styled-components";

const HiddenContainer = ({ hasModal }) => {
  // props로 li의 index 를 받아와서 해당 값의 content 보여주기
  return <Container className={hasModal && "slideIn"}>짜잔</Container>;
};
export default HiddenContainer;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 335px;
  width: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS["white"]};
  border-right: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
  border-radius: 0 20px 20px 0;
  box-shadow: 20px 0px 15px -10px rgba(0, 0, 0, 0.025);
  visibility: hidden;
  z-index: -1;
  transition: all 0.2s;
  transition-delay: 0.21s;

  &.slideIn {
    left: 75px;
    width: 397px;
    visibility: visible;
    z-index: 2;
  }
`;
