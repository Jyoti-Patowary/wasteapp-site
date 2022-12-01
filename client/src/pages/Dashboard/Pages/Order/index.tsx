import React from "react";
import styled from "styled-components";
import { Box, Grid, Typography } from "@mui/material";
import OrderDataTable from "./orderDataTable";

const Main = styled.div`
  margin: 2rem;
`;
const Order = () => {
  return (
    <Main>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" fontWeight={"bold"}>
            ORDERS OVERVIEW
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} mt={2}>
          <OrderDataTable />
        </Grid>
      </Grid>
    </Main>
  );
};

export default Order;
