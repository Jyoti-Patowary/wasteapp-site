import { Grid } from "@mui/material";
import React from "react";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

const Main = styled.div`
  max-width: 2200px;
  margin: 0 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
background-color: black;
color: white;
padding: 1rem;
height: 4rem;
display: flex;
align-items: center
}
`;

const Cards = () => {
  return (
    <Main>
      <Card>Total No. of Customers</Card>
      <Card>Customer Orders</Card>
      <Card>Workers Available</Card>
      <Card>Assigned Orders</Card>
    </Main>
  );
};

export default Cards;
