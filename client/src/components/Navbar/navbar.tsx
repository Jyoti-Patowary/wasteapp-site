import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaPiedPiperAlt } from "react-icons/fa";
import DrawerNav from "./drawerNav";
import { useNavigate } from "react-router-dom";
import SignUp from "../Buttons/SignUp";
import Login from "../Buttons/Login";

export default function Navbar() {
  // const login = React.useRef(null)
  const [value, setvalue] = React.useState();

  const links = ["/", "/services", "/about", "/contact"];

  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "black" }}>
        <Toolbar sx={{ p: "15px" }}>
          <FaPiedPiperAlt size={50} style={{ fontSize: "1.1rem" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.1rem", pl: "10%" }}>
                WasteApp
              </Typography>
              <DrawerNav />
            </>
          ) : (
            <>
              WasteApp
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                <Login />
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                <SignUp />
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
