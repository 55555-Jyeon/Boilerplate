import { styled, css } from "styled-components";
import { useState } from "react";
import { REGEXP } from "../constants/regexp";
import { FormIcon } from "../assets";

const BasicInput = ({
  label,
  name,
  variant,
  size,
  type,
  register,
  isDirty,
  errors,
  defaultValues,
  ...inputProps
}) => {
  // input:focus + label, input:valid + label
  const [isFocused, setFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  const handleInputChange = (e) => {
    setIsValid(true);
  };

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
        {errors ? (
          <CheckValid
            src={FormIcon.error}
            className={!isFocused ? "hidden" : ""}
          />
        ) : (
          <CheckValid
            src={FormIcon.confirm}
            className={
              (defaultValues === null && isFocused) || !isFocused
                ? "hidden"
                : ""
            }
          />
        )}
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
    min-width: 256px;
    min-height: 30px;

    padding-left: 10px;
  `,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputBox = styled.div`
  height: 50px;
  display: flex;
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
  bottom: 53%;
  left: 90%;
  width: 20px;
  height: 20px;
  visibility: visible;

  &.hidden {
    visibility: hidden;
  }
`;
