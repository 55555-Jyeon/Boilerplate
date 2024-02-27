import { MenubarIcon } from "../assets";
import ExplorePage from "../page/explore";
import ChattingPage from "../page/message";
import MyPage from "../page/my";

export const MENU_LIST = [
  {
    title: "Home",
    route: "/home",
    icon: MenubarIcon.home,
    hasModal: false,
    hasOptions: false,
    content: "",
  },
  {
    title: "Search",
    route: "#",
    icon: MenubarIcon.search,
    hasModal: true,
    hasOptions: false,
  },
  {
    title: "Explore",
    route: "/explore",
    icon: MenubarIcon.explore,
    hasModal: false,
    hasOptions: false,
    content: <ExplorePage />,
  },
  {
    title: "Message",
    route: "/message",
    icon: MenubarIcon.send,
    hasModal: false,
    hasOptions: false,
    content: <ChattingPage />,
  },
  {
    title: "Notifications",
    route: "#",
    icon: MenubarIcon.like,
    hasModal: true,
    hasOptions: false,
  },
  {
    title: "Profile",
    route: "/my-page",
    icon: MenubarIcon.defaultProfile,
    hasModal: false,
    hasOptions: false,
    content: <MyPage />,
  },
  {
    title: "More",
    route: "#",
    icon: MenubarIcon.menu,
    hasModal: false,
    hasOptions: true,
  },
];

export const MORE_OPTIONS = [
  { title: "Settings", icon: MenubarIcon.gear },
  { title: "Switch appearance", icon: MenubarIcon.sun },
  { title: "Report a problem", icon: MenubarIcon.problem },
  {},
  { title: "Switch account" },
  { title: "Log out" },
];
