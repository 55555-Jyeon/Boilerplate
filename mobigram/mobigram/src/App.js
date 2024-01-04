import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";

function App() {
  // MSW 실행 환경 === development
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/browser");
    worker.start();
  }

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
