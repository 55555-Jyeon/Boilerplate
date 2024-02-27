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
  profile: css`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.gray[200]};
    font-size: ${({ theme }) => theme.FONT_SIZE["small"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["semiBold"]};
  `,
};

const sizeCSS = {
  form: css`
    min-width: 268px;
    min-height: 32px;
    margin: 12px 0;
  `,
  profile: css`
    width: 106px;
    height: 32px;
    margin-left: 16px;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.6s;
`;
