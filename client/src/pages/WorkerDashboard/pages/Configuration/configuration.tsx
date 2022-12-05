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
import { ConfigurationMainBox } from "../../../CustomerDashboard/customerStyles";
import Lottie from "lottie-react";
import update from "../../../../LottieFiles/Update.json";

const Configuration = () => {
  return (
    <Box sx={{ backgroundColor: "#dde1e7" }}>
      <ConfigurationMainBox>
        <Grid container spacing={3} marginTop={7}>
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
                // height: "39rem",
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
              <Grid
                container
                xs={12}
                sx={{
                  display: "flex",

                  justifyContent: "space-between ",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Box sx={{ flex: 1 }}>
                    <Lottie
                      animationData={update}
                      style={{ height: "35rem" }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12} md={6}>
                        {" "}
                        <TextField
                          fullWidth
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
                      <Grid item xs={12} md={6}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="lastname"
                          required
                          id="lastname"
                          label="Last Name"
                          autoFocus
                          // value={values.firstname}
                          // onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="email"
                          required
                          id="email"
                          label="Email"
                          autoFocus
                          // value={values.firstname}
                          // onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="phoneNumber"
                          required
                          id="phoneNumber"
                          label="Phone Number"
                          autoFocus
                          // value={values.firstname}
                          // onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="password"
                          required
                          id="password"
                          label="Password"
                          autoFocus
                          // value={values.firstname}
                          // onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="confirmPassword"
                          required
                          id="confirmPassword"
                          label="Confirm Password"
                          autoFocus
                          // value={values.firstname}
                          // onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="address"
                          required
                          id="address"
                          label="Address"
                          autoFocus
                          // value={values.firstname}
                          // onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="password"
                          required
                          id="password"
                          label="Password"
                          autoFocus
                          // value={values.firstname}
                          // onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Button variant="contained" component="label">
                          Upload
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </ConfigurationMainBox>
    </Box>
  );
};

export default Configuration;
