import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FlexCenter } from '../../styles/common.style';

const Header = () => {
  const navigate = useNavigate();

  return <Wrapper></Wrapper>;
};
export default Header;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  ${FlexCenter}
`;
