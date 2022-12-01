import React from "react";
import { Grid, Box, Typography, Card, TextField } from "@mui/material";
import { RequestMainBox } from "../../customerStyles";
import Calendar from "./calendar";

const Request = () => {
  return (
    <Box sx={{ backgroundColor: "#dde1e7" }}>
      <RequestMainBox>
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
              Make a Request !
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "5rem",
                mt: "2rem",
                bgcolor: "#dde1e7",
                p: "5rem",
                borderRadius: "10px",
                boxShadow:
                  "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
              }}
            >
              <Grid container xs={12} md={12} spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Address"
                    sx={{
                      boxShadow:
                        "inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3);",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Phone Number"
                    sx={{
                      boxShadow:
                        "inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3);",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Preffered Time"
                    sx={{
                      boxShadow:
                        "inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3);",
                    }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </RequestMainBox>
    </Box>
  );
};

export default Request;
