import styled from "styled-components";
import OneUser from "../../components/one-user";

const FriendList = () => {
  return (
    <Container>
      <OneUser />
    </Container>
  );
};
export default FriendList;

const Container = styled.div`
  position: relative;
  top: 0;
  right: 0;
  margin-left: 335px;
  width: calc(100% - 335px);
  height: 107px;
  background-color: ${({ theme }) => theme.COLORS.gray[100]};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
`;
