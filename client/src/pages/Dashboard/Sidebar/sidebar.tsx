import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import Submenu from "./subMenu";
import { ClickAwayListener, IconButton, Tooltip } from "@mui/material";
import { IoMdLogOut } from "react-icons/io";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background-color: black;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
`;

const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 2rem;
`;

const Button = styled.button`
  font-size: 1.4rem;
  margin-right: 2rem;
  background-color: black;
  color: white;
  //   border: 2px solid;
  cursor: pointer;
`;

const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("access_token");

    navigate("/");
  };
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavIcon to="#" onClick={showSidebar}>
          <AiOutlineMenu />
        </NavIcon>
        <Tooltip title="Logout">
          <IconButton
            sx={{ background: "rgba(0,0,0,0.1)", mr: 6 }}
            size="large"
            onClick={() => handleLogOut()}
          >
            <IoMdLogOut />
          </IconButton>
        </Tooltip>
        {/* <Button onClick={() => handleLogOut()}>Logout</Button> */}
      </Nav>
      <ClickAwayListener onClickAway={handleClickAway}>
        <SidebarNav sidebar={sidebar}>
          <div onClick={handleClick}>
            <SidebarWrap>
              <NavIcon to="#" onClick={showSidebar}>
                <AiOutlineClose />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <Submenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </div>
        </SidebarNav>
      </ClickAwayListener>
    </IconContext.Provider>
  );
};

export default Sidebar;
