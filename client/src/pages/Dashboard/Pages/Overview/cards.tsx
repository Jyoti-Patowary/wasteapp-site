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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Card = styled.div`
background-color: black;
color: white;
display: flex;
justify-content: space-evenly;
padding: 1rem;
height: 4rem;
display: flex;
align-items: center
}
`;

const Cards = (props: any) => {
  console.log("a", props.data);

  // let arrData = props.data;
  // let newArrData = arrData.filter((curElem) => curElem.role === "customer");
  // console.log("newArrData", newArrData);

  return (
    <Main>
      <Card>
        Total No. of Customers:{" "}
        <span style={{ fontSize: "2rem" }}>{props.customersData.length}</span>
      </Card>
      <Card>
        Customer Orders:{" "}
        <span style={{ fontSize: "2rem" }}>{props.assignedOrders.length}</span>
      </Card>
      <Card>
        Workers Available{" "}
        <span style={{ fontSize: "2rem" }}>{props.role.length}</span>
      </Card>
      <Card>
        Accepted Orders:{" "}
        <span style={{ fontSize: "2rem" }}>{props.dataTicket.length}</span>
      </Card>
      <Card>
        Pending Orders:{" "}
        <span style={{ fontSize: "2rem" }}>{props.dataTicket.length}</span>
      </Card>
    </Main>
  );
};

export default Cards;
