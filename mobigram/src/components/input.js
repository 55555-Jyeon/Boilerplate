import { styled, css } from "styled-components";

const BasicInput = ({ variant, size, ...inputProps }) => {
  return <Input variant={variant} size={size} {...inputProps} />;
};

export default BasicInput;

const variantCSS = {
  form: css`
    border: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
    border-radius: 3px;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.gray[300]};
      font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
    }
  `,
};

const sizeCSS = {
  form: css`
    width: 256px;
    height: 38px;
    margin: 3px 0;
    padding-left: 10px;
  `,
};

const Input = styled.input`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
`;
