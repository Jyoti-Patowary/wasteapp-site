import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import WorkerDataTable from "./dataTableWorker";

const Main = styled.div`
  margin: 7rem 2rem 0 2rem;
`;

const Worker = () => {
  return (
    <Main>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" fontWeight={"bold"}>
            CUSTOMER OVERVIEW
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} mt={2}>
          <WorkerDataTable />
        </Grid>
      </Grid>
    </Main>
  );
};

export default Worker;
