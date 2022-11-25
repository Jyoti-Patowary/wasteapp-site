import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";

export const Logo = styled(Typography)({
  color: "white",
  padding: "1em",
}) as typeof Typography;

export const Nlinks = styled(Button)({
  color: "white",
  padding: "1em",
}) as typeof Button;

export const Item = styled(Box)({
  backgroundColor: "black",
  // height: "93vh",
  height: "100vh",
  color: "white",
}) as typeof Box;

export const Item2 = styled(Box)({
  backgroundColor: "black",
  // height: "93vh",
  height: "100vh",
  // margin: '4em 1em'
}) as typeof Box;

//Services

export const headingS = styled(Box)({
  backgroundColor: "#38c172",
  width: "99vw",
  height: "50vh",
  display: "flex",
  justifyContent: "center",
  fontFamily: "cursive",
}) as typeof Box;

export const SItem2 = styled(Box)({
  // height: "93vh",
  height: "100vh",
  // margin: '4em 1em'
}) as typeof Box;
