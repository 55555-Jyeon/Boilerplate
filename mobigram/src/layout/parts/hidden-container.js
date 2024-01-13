import styled from "styled-components";

const HiddenContainer = ({ hasModal }) => {
  // props로 li의 index 를 받아와서 해당 값의 content 보여주기
  return (
    <Container
      style={{
        visibility: hasModal ? "visible" : "hidden",
        width: hasModal ? "397px" : "0px",
        zIndex: hasModal ? "2" : "-1",
      }}
    >
      짜잔
    </Container>
  );
};
export default HiddenContainer;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 75px;
  width: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS["white"]};
  border-right: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
  border-left: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
  border-radius: 0 20px 20px 0;
  box-shadow: 20px 0px 15px -10px rgba(0, 0, 0, 0.025);
  transition: all ease-in-out 0.3s;
`;
