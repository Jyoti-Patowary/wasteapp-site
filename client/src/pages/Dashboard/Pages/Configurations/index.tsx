import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import DataTable from "./dataTable";
import styled from "styled-components";

const Main = styled.div`
  margin: 7rem 2rem 0 2rem;
`;
const Configurations = () => {
  return (
    <Main>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" fontWeight={"bold"}>
            Configuration
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} mt={2}>
          <DataTable />
        </Grid>
      </Grid>
    </Main>
  );
};

export default Configurations;
