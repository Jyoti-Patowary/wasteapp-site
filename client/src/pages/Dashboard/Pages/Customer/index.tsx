import React from "react";
import styled from "styled-components";
import CustomerDataTable from "./dataTable";
import { Box, Grid, Typography } from "@mui/material";
import CustomizedTables from "./dataTable";

const Main = styled.div`
  margin: 2rem;
`;

const Customer = () => {
  return (
    <Main>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" fontWeight={"bold"}>
            CUSTOMER OVERVIEW
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} mt={2}>
          <CustomizedTables />
        </Grid>
      </Grid>
    </Main>
  );
};

export default Customer;
