import styled from "styled-components";
import { FlexCenter } from "../../styles/common.style";

const Footer = () => {
  return (
    <Wrapper>
      <Ideology>
        Mobi is a non-profit organization that provides free education to all
        non-majors in the world who are frightened by expensive private
        education and lack of realistic time investment, and supports new
        beginnings through the formation of infrastructure after employment.
      </Ideology>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 85px;
  ${FlexCenter}
`;

const Ideology = styled.p`
  ${FlexCenter}
  width: 60%;
  padding: 0 10%;
  word-wrap: break-word;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
  line-height: 16px;
`;
