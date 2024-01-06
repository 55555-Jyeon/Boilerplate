import { styled, css } from "styled-components";
import { FlexJustifyCenter } from "../styles/common.style";
import { useEffect, useState } from "react";
import CONFIRM from "../assets/confirm.png";
import ERROR from "../assets/mismatch.png";
import { REGEXP } from "../constants/regexp";

const BasicInput = ({
  label,
  name,
  variant,
  size,
  type,
  register,
  errors,
  defaultValue,
  ...inputProps
}) => {
  // input:focus + label, input:valid + label
  const [isFocused, setFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleInputChange = (e) => {
    setIsValid(true);
  };

  useEffect(() => {
    if (isValid) {
      setFocused(true);
    }
  }, [isValid]);

  return (
    <Container>
      <InputBox>
        <Label className={isFocused || isValid ? "focused" : ""}>{label}</Label>
        <Input
          type={type}
          name={name}
          variant={variant}
          size={size}
          {...inputProps}
          autoComplete="off"
          onFocus={handleFocus}
          onChange={handleInputChange}
          {...register(label, {
            required: true,
            pattern: {
              value: REGEXP[label],
              message: "error occur!",
            },
          })}
        />
        {errors && <CheckValid src={ERROR} />}
      </InputBox>
    </Container>
  );
};

export default BasicInput;

const variantCSS = {
  form: css`
    border: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
    border-radius: 3px;
  `,
};

const sizeCSS = {
  form: css`
    width: 256px;
    height: 30px;
    margin: 3px 0;
    padding-left: 10px;
    padding-top: 5px;
  `,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputBox = styled.div`
  ${FlexJustifyCenter}
  flex-direction: column;
`;

const Label = styled.label`
  position: relative;
  top: 50%;
  left: 4%;
  color: ${({ theme }) => theme.COLORS.gray[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
  z-index: 1;
  transition: all 0.3s ease;

  &.focused {
    top: 30%;
    font-size: 10px;
  }
`;

const Input = styled.input`
  position: relative;
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
   &:focus {
    border: none;
    outline: 1px solid ${({ theme }) => theme.COLORS.gray[500]};
  }
`;

const CheckValid = styled.img`
  position: relative;
  bottom: 42%;
  left: 90%;
  width: 20px;
  height: 20px;
`;
