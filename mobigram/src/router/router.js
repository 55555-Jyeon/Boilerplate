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
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <GreetingPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
    ],
  },
  {
    path: "/mobi",
    element: <MobiLayout />,
    children: [
      { path: "/mobi", element: <HomePage /> },
      { path: "/mobi/explore", element: <SearchPage /> },
      { path: "/mobi/message", element: <ChattingPage /> },
      { path: "/mobi/my-page", element: <MyPage /> },
    ],
  },
]);

export default router;
