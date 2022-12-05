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
background-color: dodgerblue;
border-radius : 8px;
box-shadow : 5px 5px 12px #ccc;
color: white;
display: block !important;
text-align : center;
justify-content: space-evenly;
padding: 1rem;
// height: 4rem;
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
        <div style={{ fontSize: "4rem", fontWeight: "bold" }}>
          {props.customersData.length}
        </div>
        Total No. of Customers
      </Card>
      <Card>
        <div style={{ fontSize: "4rem", fontWeight: "bold" }}>
          {props.assignedOrders.length}
        </div>
        Customer Orders
      </Card>
      <Card>
        <div style={{ fontSize: "4rem", fontWeight: "bold" }}>
          {props.role.length}
        </div>
        Workers Available{" "}
      </Card>
      <Card>
        <div style={{ fontSize: "4rem", fontWeight: "bold" }}>
          {props.acceptedTickets}
        </div>
        Accepted Orders
      </Card>
      <Card>
        <div style={{ fontSize: "4rem", fontWeight: "bold" }}>
          {props.pendingTickets}
        </div>
        Pending Orders
      </Card>
    </Main>
  );
};

export default Cards;
