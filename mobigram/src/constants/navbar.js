import { MenubarIcon } from "../assets";

export const MENU_LIST = [
  {
    title: "Home",
    route: "/home",
    icon: MenubarIcon.home,
  },
  {
    title: "Search",
    route: "#",
    icon: MenubarIcon.search,
  },
  {
    title: "Explore",
    route: "/explore",
    icon: MenubarIcon.explore,
  },
  {
    title: "Message",
    route: "/message",
    icon: MenubarIcon.send,
  },
  {
    title: "Notifications",
    route: "#",
    icon: MenubarIcon.like,
  },
  {
    title: "Profile",
    route: "/my-page",
    icon: MenubarIcon.defaultProfile,
  },
  {
    title: "More",
    route: "#",
    icon: MenubarIcon.more,
    options: [],
  },
];
