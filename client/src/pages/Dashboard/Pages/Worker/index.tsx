import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Box, Grid, Typography } from "@mui/material";
import WorkerDataTable from "./dataTableWorker";
import axios from "axios";

const Main = styled.div`
  margin: 2rem;
`;

const Worker = () => {
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
    getData();
  }, []);
  return (
    <Main>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" fontWeight={"bold"}>
            WORKER OVERVIEW
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12} mt={2}>
            <WorkerDataTable
              data={allData}
              dataTicket={allTicketData}
              role={workers}
              assignedOrders={assignedTickets}
            />
          </Grid>
        </Grid>
      </Grid>
    </Main>
  );
};

export default Worker;
