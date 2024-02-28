import styled from "styled-components";
import ImageSlider from "./components/carousel";
import SignInForm from "./components/sign-in";

const SignInPage = () => {
  return (
    <Wrapper>
      <ImageSlider />
      <SignInForm />
    </Wrapper>
  );
};
export default SignInPage;

const Wrapper = styled.div`
  width: 100vw;
  height: 92vh;
  overflow: hidden;
`;
