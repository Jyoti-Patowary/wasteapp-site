import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { workerData } from "worker_threads";
import { cardContext } from "./cardContext";
import Cards from "./cards";
import { Chart } from "./chart";
import { PieChartOverview } from "./pieChart";
import { Grid, Typography } from "@mui/material";

// import { Audio } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  getCustomers,
  getTicketCounts,
  getTickets,
  getWorkers,
} from "../../../../apis/dashboard";

const Main = styled.div`
  margin: 7rem auto 2rem auto;
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
  const [customerData, setCustomerData] = React.useState([]);
  const [totalAcceptedTicket, setTotalAcceptedTicket] = React.useState(0);
  const [pendingTickets, setPendingTickets] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const getData = async () => {
    try {
      const [workers, tickets, customers, ticketCounts] = await Promise.all([
        getWorkers(),
        getTickets(),
        getCustomers(),
        getTicketCounts(sessionStorage.getItem("id")),
      ]);
      console.log(workers, { tickets });

      // setAllData(users.data);
      // setAllTicketData(tickets.data);

      setWorkers(workers.data);

      setAssignedTickets(tickets.data);

      setCustomerData(customers.data);

      setTotalAcceptedTicket(ticketCounts.data.totalAcceptedOrders);

      setPendingTickets(ticketCounts.data.noOfOpenOrders);

      // const res = await axios.get(url, {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   }
      // });
      // console.log({ res });

      // const resTicket = await axios.get(ticketUrl, {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
      // });
      // console.log(resTicket);

      // if (res.status === 200) {
      //   setAllData(res.data);
      //   setAllTicketData(resTicket.data);

      //   let workerData = res.data.filter(function checkRole(item) {
      //     return item.role.user;
      //   });
      //   setWorkers(workerData);

      //   let ticketAssigned = resTicket.data.filter(function checkStatus(item) {
      //     return item.status.ticket;
      //   });
      //   setAssignedTickets(ticketAssigned);

      //   console.log(workers);
      //}
    } catch (error) {}
  };

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, []);

  return (
    <>
      <Main>
        <Heading>DASHBOARD</Heading>
        <Para>WELCOME TO YOUR DASHBOARD</Para>
        {loading ? (
          // <Audio
          //   height="80"
          //   width="80"
          //   radius="9"
          //   color="green"
          //   ariaLabel="three-dots-loading"
          //   wrapperStyle
          //   wrapperClass
          // />
          <h1>loading</h1>
        ) : (
          <Cards
            data={allData}
            dataTicket={allTicketData}
            role={workers}
            assignedOrders={assignedTickets}
            customersData={customerData}
            acceptedTickets={totalAcceptedTicket}
            pendingTickets={pendingTickets}
          />
        )}

        {/* <Grid container>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Chart
              data={allData}
              dataTicket={allTicketData}
              role={workers}
              assignedOrders={assignedTickets}
            />
          </Grid>
        </Grid> */}
      </Main>
    </>
  );
};

export default Overview;
