import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FlexCenter } from '../../styles/common.style';

const Footer = () => {
  const navigate = useNavigate();

  return <Wrapper></Wrapper>;
};
export default Footer;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 360px;
  ${FlexCenter}
`;
