import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import { worker } from "./__mock__/browser";

function App() {
  const queryClient = new QueryClient();

  // MSW 실행 환경 === development
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
