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
    title: "Overview",
    path: "/admin-dashboard/",
    icon: <AiOutlineHome />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: "Customers",
        path: "/admin-dashboard/overview/customers",
        icon: <AiOutlineUser />,
      },
      {
        title: "Workers",
        path: "/admin-dashboard/overview/workers",
        icon: <FaUserInjured />,
      },
    ],
  },
  {
    title: "Orders",
    path: "/admin-dashboard/order",
    icon: <FaOpencart />,
  },
  // {
  //   title: "Assign",
  //   path: "/admin-dashboard/assign",
  //   icon: <FaMixer />,
  // },
  // {
  //   title: "History",
  //   path: "/admin-dashboard/history",
  //   icon: <AiOutlineHistory />,
  // },
  {
    title: "Configurations",
    path: "/admin-dashboard/configurations",
    icon: <FaCog />,
  },
];
