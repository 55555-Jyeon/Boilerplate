import styled from "styled-components";
import OneUser from "../../components/one-user";
import { FlexCenter, PositionCenter } from "../../styles/common.style";

const FriendListSlider = () => {
  return (
    <Container>
      <OneUser />
    </Container>
  );
};
export default FriendListSlider;

const Container = styled.div`
  ${PositionCenter}
  position: relative;
  width: 630px;
  height: 107px;
  margin: 54px 13px 0;
  border: 1px solid #555;
  ${FlexCenter}
`;
