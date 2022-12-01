import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCog, FaOpencart } from "react-icons/fa";
import { SidebarItem } from "./sidebarItem";

export const SidebarData: SidebarItem[] = [
  {
    title: "Home",
    path: "/customer-dashboard/",
    icon: <AiOutlineHome />,
    // iconClosed: <AiFillCaretDown />,
    // iconOpened: <AiFillCaretUp />,
  },
  // {
  //   title: "Request",
  //   path: "/customer-dashboard/request",
  //   icon: <FaOpencart />,
  // },
  {
    title: "History",
    path: "/customer-dashboard/history",
    icon: <AiOutlineHistory />,
  },
  {
    title: "Configurations",
    path: "/customer-dashboard/configuration",
    icon: <FaCog />,
  },
];
