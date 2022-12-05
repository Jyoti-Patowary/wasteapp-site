import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCog, FaOpencart, FaUserInjured, FaMixer } from "react-icons/fa";
import { SidebarItem } from "./sidebarItem";

export const SidebarData: SidebarItem[] = [
  {
    title: "Home",
    path: "/worker-dashboard",
    icon: <AiOutlineHome />,
  },
  {
    title: "Request Received",
    path: "/worker-dashboard/request-received",
    icon: <FaOpencart />,
  },
  {
    title: "History",
    path: "/worker-dashboard/history",
    icon: <AiOutlineHistory />,
  },
  {
    title: "Configurations",
    path: "/worker-dashboard/configuration",
    icon: <FaCog />,
  },
];
