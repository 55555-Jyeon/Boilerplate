import { styled, css } from "styled-components";

const BasicButton = ({ variant, size, type, children, ...buttonProps }) => {
  return (
    <Button variant={variant} size={size} type={type} {...buttonProps}>
      {children}
    </Button>
  );
};

export default BasicButton;

const variantCSS = {
  form: css`
    border-radius: 3px;
    background-color: ${({ theme }) => theme.COLORS.primary["skyBlue"]};
    color: ${({ theme }) => theme.COLORS["white"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["small"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["semiBold"]};
  `,
  disabled: css``,
};

const sizeCSS = {
  form: css`
    width: 268px;
    height: 32px;
    margin: 12px 0;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.6s;

  &:hover,
  &:focus {
  }
`;
