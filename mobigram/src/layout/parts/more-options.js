import styled from "styled-components";
import { FlexAlignCenter } from "../../styles/common.style";
import { MORE_OPTIONS } from "../../constants/navbar";

const MoreOptionList = ({ hasMoreOptions }) => {
  return (
    <Container
      style={{
        opacity: hasMoreOptions ? "1" : "0",
      }}
    >
      {MORE_OPTIONS.map((menu, idx) => (
        <li key={idx}>
          {menu.icon && <Icon src={menu.icon} />}
          <p>{menu.title}</p>
        </li>
      ))}
    </Container>
  );
};
export default MoreOptionList;

const Container = styled.ul`
  position: absolute;
  top: 60%;
  left: 5%;
  ${FlexAlignCenter}
  justify-content: space-evenly;
  flex-direction: column;
  width: 266px;
  height: 344px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS["white"]};
  box-shadow: 5px 5px 10px 6px rgba(0, 0, 0, 12%);

  & > li {
    ${FlexAlignCenter}
    flex-direction: row;
    width: 250px;
    height: 56px;
    transition: all ease 0.3s;
    cursor: default;

    &:nth-of-type(4) {
      width: 100%;
      height: 6px;
      background-color: rgba(202, 202, 202, 0.2);
    }

    &:nth-of-type(5),
    &:nth-of-type(6) {
      padding-left: 16px;
    }

    &:hover,
    &:active {
      background-color: rgba(202, 202, 202, 0.2);
      border-radius: 10px;
    }
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 26px 0 12px;
  transition: all 0.3s ease;
`;
