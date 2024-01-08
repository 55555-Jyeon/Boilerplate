import styled from "styled-components";
import { UserIcon } from "../assets";

const OneUser = () => {
  return (
    <Container>
      <img src={UserIcon.defaultProfile} />
      <p>Username</p>
    </Container>
  );
};
export default OneUser;

const Container = styled.div`
  width: 56px;
  height: 78px;
  margin: 0 13px;
  & > img {
    width: 56px;
  }

  & > p {
    font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
    margin: 4px 0;
  }
`;
