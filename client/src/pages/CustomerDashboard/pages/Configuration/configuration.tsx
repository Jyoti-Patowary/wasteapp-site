import React from "react";
import {
  Box,
  styled,
  Grid,
  Typography,
  Card,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { ConfigurationMainBox } from "../../customerStyles";
import Lottie from "lottie-react";
import update from "../../../../LottieFiles/Update.json";

const Configuration = () => {
  return (
    <Box sx={{ backgroundColor: "#dde1e7" }}>
      <ConfigurationMainBox>
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
              Configuration !
            </Typography>
          </Grid>
          <Grid container xs={12} md={12}>
            <Card
              sx={{
                height: "35rem",
                m: "2rem 2rem",
                bgcolor: "#dde1e7",
                width: "120rem",
                p: "2rem",
                borderRadius: "10px",
                boxShadow:
                  "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
              }}
            >
              <Grid item xs={12} md={12}>
                <Typography variant="h5" fontWeight={"bold"}>
                  Update Your Profile
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ mb: 4 }} />
              </Grid>
              <Grid container xs={12} md={6} direction={"column"}>
                <Lottie animationData={update} style={{ height: "29rem" }} />
              </Grid>
              <Grid container xs={12} md={6} direction={"column"}>
                <Grid item xs={6} md={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstname"
                    required
                    id="firstname"
                    label="First Name"
                    autoFocus
                    // value={values.firstname}
                    // onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </ConfigurationMainBox>
    </Box>
  );
};

export default Configuration;
