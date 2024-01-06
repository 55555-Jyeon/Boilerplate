import styled from "styled-components";
import { FlexAlignCenter, FlexCenter } from "../../../styles/common.style";
import LOGO from "../../../assets/logo.png";
import BasicInput from "../../../components/input";
import BasicButton from "../../../components/button";
import Instagram from "../../../assets/instagram.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SIGNUP } from "../../../constants/requirements";

const SignUpForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      FullName: "",
      Username: "",
      Password: "",
    },
  });

  const onSubmit = (data) => {
    setLocalStorageUserInfo(data.email, data.FullName, data.Username);
    navigate("/");
  };

  // 로컬 스토리지에 UserInfo 값 저장
  const setLocalStorageUserInfo = (info) => {
    localStorage.setItem("formInfo", JSON.stringify(info));
  };

  // to login
  const navSignIn = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo src={LOGO} />
          <p>Sign up to see photos and videos from your friends.</p>
          <SNSlogin>
            <ICON src={Instagram} />
            <p>Log in with Instagram</p>
          </SNSlogin>
          <LineGroup>
            <Line />
            <p>OR</p>
            <Line />
          </LineGroup>
          <Inputs>
            {SIGNUP.map((item, idx) => {
              const { label, name } = item;
              return (
                <BasicInput
                  key={idx}
                  label={label}
                  name={name}
                  register={register}
                  errors={errors[label]}
                  variant={"form"}
                  size={"form"}
                />
              );
            })}
          </Inputs>
          <BasicButton variant={"form"} size={"form"}>
            Log in
          </BasicButton>
        </Form>
        <SignUpBox>
          <p>Have an account?</p>
          <p onClick={navSignIn}>Log In</p>
        </SignUpBox>
      </Container>
    </Wrapper>
  );
};
export default SignUpForm;

const Wrapper = styled.div`
  width: 100vw;
  height: 92vh;
  overflow: hidden;

  & > button {
    margin-top: 20px;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  ${FlexCenter}
  flex-direction: column;
`;

const Form = styled.form`
  width: 350px;
  height: 575px;
  ${FlexCenter}
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
  margin-bottom: 14px;
  background-color: ${({ theme }) => theme.COLORS["white"]};

  & > p {
    width: 60%;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.gray[500]};
    font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
  }

  & > input:first-of-type {
    margin-top: 32px;
  }
`;
const Logo = styled.img`
  width: 180px;
  height: 54px;
  padding: 18px 0;
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

const Inputs = styled.div`
  margin: 10px 0;
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
