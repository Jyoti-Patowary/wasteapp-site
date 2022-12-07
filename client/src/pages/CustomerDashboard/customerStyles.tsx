import React from "react";
import { Box, Button, Card, styled, Typography } from "@mui/material";

export const RequestMainBox = styled(Box)(({ theme }) => ({
  width: "96%",
  height: "100vh",
  marginLeft: theme.spacing(5),
  paddingTop: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "87.5%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "89%",
  },
}));

export const HomeMainBox = styled(Box)(({ theme }) => ({
  width: "96%",
  height: "100%",
  marginLeft: theme.spacing(5),
  paddingTop: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "87.5%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "89%",
  },
}));

export const CardDataView = styled(Card)(({ theme }) => ({
  backgroundColor: "#dde1e7",
  color: "gray",
  fontWeight: "bold",
  borderRadius: "8px",
  boxShadow:
    "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
}));

export const ProfileCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#dde1e7",
  height: "8rem",
  borderRadius: "8px",
  boxShadow:
    "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
}));

export const Avatar = styled(Card)(({ theme }) => ({
  backgroundColor: "#dde1e7",
  mt: "-10rem",
  width: "10rem",
  height: "10rem",
  borderRadius: "50%",
  overflow: "hidden",
  backgroundImage: "contain",
  boxShadow:
    "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
  zIndex: "10px",
  position: "absolute",
  top: "1rem",
  transform: "translateY(30%)",
  right: "8rem",
}));

export const ProfileTable = styled(Card)(({ theme }) => ({
  backgroundColor: "#dde1e7",
  color: "gray",
  fontWeight: "bold",
  borderRadius: "8px",
  boxShadow:
    "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
}));

export const ConfigurationMainBox = styled(Box)(({ theme }) => ({
  width: "96%",
  height: "100%",
  marginLeft: theme.spacing(5),
  paddingTop: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "87.5%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "89%",
  },
}));

export const HistoryMainBox = styled(Box)(({ theme }) => ({
  width: "96%",
  height: "100vh",
  marginLeft: theme.spacing(5),
  paddingTop: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "87.5%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "89%",
  },
}));
