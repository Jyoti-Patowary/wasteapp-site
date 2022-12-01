import React from "react";
import { Box, styled, Grid, Typography, Card } from "@mui/material";
import { HistoryMainBox } from "../../customerStyles";
import CustomerHistoryData from "./customerHistoryData";

const History = () => {
  return (
    <Box sx={{ backgroundColor: "#dde1e7" }}>
      <HistoryMainBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              sx={{
                display: "flex",
                // ml: "1rem",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Customer History !
            </Typography>
          </Grid>
          <Grid container xs={12} md={12}>
            <Card
              sx={{
                height: "29rem",
                m: "2rem 2rem",
                bgcolor: "#dde1e7",
                width: "120rem",
                // p: "5rem",
                borderRadius: "10px",
                boxShadow:
                  "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
              }}
            >
              <CustomerHistoryData />
            </Card>
          </Grid>
        </Grid>
      </HistoryMainBox>
    </Box>
  );
};

export default History;
