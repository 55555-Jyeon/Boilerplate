import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import SignInPage from "../page/sign";
import SignUpPage from "../page/sign/components/sign-up";
import MainLayout from "../layout/main-layout";
import HomePage from "../page/home";
import FullLayout from "../layout/full-height-layout";
import MyPage from "../page/my";
import ChattingPage from "../page/message";
import ExplorePage from "../page/explore";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/home:page", element: <HomePage /> },
    ],
  },
  {
    element: <FullLayout />,
    children: [
      { path: "/explore", element: <ExplorePage /> },
      { path: "/my-page", element: <MyPage /> },
      { path: "/message", element: <ChattingPage /> },
    ],
  },
]);

export default router;
