import React from "react";
import { Box, Button, Card, styled, Typography } from "@mui/material";

export const RequestMainBox = styled(Box)(({ theme }) => ({
  width: "96%",
  height: "100vh",
  //   display: "flex",
  //   flexDirection: "row",
  marginLeft: theme.spacing(5),
  paddingTop: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "87.5%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "89%",
  },
}));
