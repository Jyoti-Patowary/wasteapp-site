import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { workerData } from "worker_threads";
import { cardContext } from "./cardContext";
import Cards from "./cards";
import { Chart } from "./chart";
import { PieChartOverview } from "./pieChart";
import { Grid, Typography } from "@mui/material";

const Main = styled.div`
  margin: 2rem auto 2rem auto;
`;

const Heading = styled.div`
  margin: 0 3rem 1rem 1rem;
  font-size: 2rem;
  font-weight: 25rem;
`;
const Para = styled.div`
  margin: 0 1rem 1rem 1rem;
  font-size: 1rem;
`;

const Overview = () => {
  const [allData, setAllData] = React.useState([]);
  const [allTicketData, setAllTicketData] = React.useState([]);
  const [workers, setWorkers] = React.useState([]);
  const [assignedTickets, setAssignedTickets] = React.useState([]);

  const getData: any = async () => {
    const TOKEN_KEY = "access_token";
    const accessToken = localStorage.getItem(TOKEN_KEY);
    try {
      const url = "http://localhost:4000/users";
      const ticketUrl = "http://localhost:4000/tickets";

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log({ res });

      const resTicket = await axios.get(ticketUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(resTicket);

      if (res.status === 200) {
        setAllData(res.data);
        setAllTicketData(resTicket.data);

        let workerData = res.data.filter(function checkRole(item) {
          return item.role.user;
        });
        setWorkers(workerData);

        let ticketAssigned = resTicket.data.filter(function checkStatus(item) {
          return item.status.ticket;
        });
        setAssignedTickets(ticketAssigned);

        console.log(workers);
      }
    } catch (error) {}
  };

  useEffect(() => {
    // const userData = JSON.parse(localStorage.getItem("userData") as string);
    getData();
  }, []);

  return (
    <>
      <Main>
        <Heading>DASHBOARD</Heading>
        <Para>WELCOME TO YOUR DASHBOARD</Para>
        <Cards
          data={allData}
          dataTicket={allTicketData}
          role={workers}
          assignedOrders={assignedTickets}
        />
        <Grid container>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Chart
              data={allData}
              dataTicket={allTicketData}
              role={workers}
              assignedOrders={assignedTickets}
            />
          </Grid>
        </Grid>
      </Main>
    </>
  );
};

export default Overview;
