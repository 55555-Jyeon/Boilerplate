import styled from "styled-components";

const HiddenContainer = ({ hasModal }) => {
  return (
    <Container
      style={{
        visibility: hasModal ? "visible" : "hidden",
        width: hasModal ? "397px" : "0px",
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
  width: 0px; // 397px
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS["white"]};
  border-right: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
  border-left: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
  border-radius: 0 20px 20px 0;
  box-shadow: 8px 8px 15px 10px rgba(0, 0, 0, 0.1);
  transition: all ease 0.3s;
  visibility: hidden; // visible
`;
