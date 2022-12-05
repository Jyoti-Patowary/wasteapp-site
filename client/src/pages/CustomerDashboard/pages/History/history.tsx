import React from "react";
import { Box, styled, Grid, Typography, Card } from "@mui/material";
import { HistoryMainBox } from "../../customerStyles";
import CustomerHistoryData from "./customerHistoryData";

const History = ({ refresh }) => {
  return (
    <Box sx={{}}>
      <HistoryMainBox>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              sx={{
                display: "flex",
                // ml: "1rem",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              My Service History !
            </Typography>
          </Grid>
          <Grid container xs={12} md={12}>
            <Card
              sx={{
                marginY: 2,
                bgcolor: "#dde1e7",
                width: "120rem",
                // p: "5rem",
                borderRadius: "10px",
                boxShadow:
                  "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
              }}
            >
              <CustomerHistoryData refresh={refresh} />
            </Card>
          </Grid>
        </Grid>
      </HistoryMainBox>
    </Box>
  );
};

export default History;
