import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import GreetingPage from "../page/login/";
import SignUpPage from "../page/login/components/signUp-form";
import HomePage from "../page/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <GreetingPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/mobi", element: <HomePage /> },
    ],
  },
]);

export default router;
