import { MenubarIcon } from "../assets";
import HiddenContainer from "../layout/parts/hidden-container";

export const MENU_LIST = [
  {
    title: "Home",
    route: "/home",
    icon: MenubarIcon.home,
    hasModal: false,
  },
  {
    title: "Search",
    route: "#",
    icon: MenubarIcon.search,
    hasModal: true,
  },
  {
    title: "Explore",
    route: "/explore",
    icon: MenubarIcon.explore,
    hasModal: false,
  },
  {
    title: "Message",
    route: "/message",
    icon: MenubarIcon.send,
    hasModal: false,
  },
  {
    title: "Notifications",
    route: "#",
    icon: MenubarIcon.like,
    hasModal: true,
  },
  {
    title: "Profile",
    route: "/my-page",
    icon: MenubarIcon.defaultProfile,
    hasModal: false,
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
