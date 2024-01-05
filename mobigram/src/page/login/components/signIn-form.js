import styled from "styled-components";
import { FlexAlignCenter, FlexCenter } from "../../../styles/common.style";
import LOGO from "../../../assets/mobigram.png";
import BasicInput from "../../../components/input";
import BasicButton from "../../../components/button";
import Instagram from "../../../assets/instagram.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "../../../consts/schema";

const SignInForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  // onClick SignUp button : navigate to sign-up-page
  const navSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo src={LOGO} />
          <BasicInput
            variant={"form"}
            size={"form"}
            placeholder="Phone Number, username, or email"
            required
          />
          <BasicInput
            variant={"form"}
            size={"form"}
            placeholder="Password"
            required
          />
          <BasicButton variant={"form"} size={"form"}>
            Log in
          </BasicButton>
          <LineGroup>
            <Line />
            <p>OR</p>
            <Line />
          </LineGroup>
          <SNSlogin>
            <ICON src={Instagram} />
            <p>Log in with Instagram</p>
          </SNSlogin>
          <p>Forgot password?</p>
        </Form>
        <SignUpBox>
          <p>Don't have an account?</p>
          <p onClick={navSignUp}>Sign Up</p>
        </SignUpBox>
      </Container>
    </Wrapper>
  );
};
export default SignInForm;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  ${FlexCenter}
  flex-direction: column;
`;
const Container = styled.div`
  position: absolute;
  left: 5%;
`;

const Form = styled.form`
  width: 350px;
  height: 402px;
  ${FlexCenter}
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
  margin-bottom: 14px;
  background-color: ${({ theme }) => theme.COLORS["white"]};

  // forgot password?
  & > p {
    font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
    cursor: pointer;
  }
`;
const Logo = styled.img`
  width: 180px;
  height: 54px;
  padding: 18px 0;
  margin-bottom: 18px;
`;

const LineGroup = styled.div`
  width: 268px;
  ${FlexAlignCenter}
  justify-content: space-between;

  & > p {
    font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["medium"]};
    color: ${({ theme }) => theme.COLORS.gray[500]};
  }
`;
const Line = styled.div`
  width: 113px;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.gray[300]};
`;

const SNSlogin = styled.div`
  ${FlexCenter}

  // log in with instagram
  & > p {
    font-size: ${({ theme }) => theme.FONT_SIZE["small"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["semiBold"]};
    background: linear-gradient(
      to right,
      #8405ff 12%,
      #f800d8 50%,
      #ff006c 80%,
      #ffcb00
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    cursor: pointer;
  }
`;
const ICON = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 12px;
`;

const SignUpBox = styled.div`
  width: 350px;
  height: 63px;
  ${FlexCenter}
  border: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
  background-color: ${({ theme }) => theme.COLORS["white"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["medium"]};

  & > p:nth-of-type(1) {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
  }
  & > p:nth-of-type(2) {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["medium"]};
    color: ${({ theme }) => theme.COLORS.primary["skyBlue"]};
    margin: 0 8px;
    cursor: pointer;
  }
`;
