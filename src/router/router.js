import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import GreetingPage from "../page/login/";
import SignUpPage from "../page/login/components/signUp-form";
import HomePage from "../page/home";
import SearchPage from "../page/search";
import MyPage from "../page/my";
import ChattingPage from "../page/message";
import MobiLayout from "../layout/member-layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <GreetingPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
    ],
  },

  {
    element: <MobiLayout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/explore", element: <SearchPage /> },
      { path: "/message", element: <ChattingPage /> },
      { path: "/my-page", element: <MyPage /> },
    ],
  },
]);

export default router;
