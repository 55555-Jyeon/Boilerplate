import styled from "styled-components";
import SignInForm from "./components/signIn-form";
import ImageSlider from "./components/carousel";
import { useState } from "react";
import SignUpForm from "./components/signUp-form";

const GreetingPage = () => {
  return (
    <Wrapper>
      <ImageSlider />
      <SignInForm />
    </Wrapper>
  );
};
export default GreetingPage;

const Wrapper = styled.div`
  width: 100vw;
  height: 92vh;
  overflow: hidden;
`;
