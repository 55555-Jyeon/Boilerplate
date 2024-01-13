import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    list-style: none;
  }
  body {
    background-color: #FFFFFF;
    font-family: 'Noto-sans', sans-serif;
  }
  button {
    border: none;
  }
  a {      
    text-decoration: none;
  }
`;

export default GlobalStyles;
