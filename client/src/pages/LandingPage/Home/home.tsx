import { Box, Button, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import React from "react";
import Lottie from "lottie-react";
import deliverygreen from "../../../LottieFiles/deliverygreen.json";
import { Item, Item2 } from "../../../components/styles/style";
import About from "../About/about";
import Services from "../Services/services";
import Contact from "../Contact/contact";
import Navbar from "../../../components/Navbar/navbar";
import bg from "../../../images/Home.jpg";

function Home() {
  return (
    <div>
      <Box>
        <Navbar />
        <Grid container xs={12}>
          <Grid item xs={12} md={6} sx={{ marginTop: "64px" }}>
            <Item>
              <Typography
                sx={{
                  p: "10rem 4rem",
                  fontFamily: "Luckiest Guy",
                  fontSize: "5rem",
                }}
              >
                Let's Make our City Clean and Green
              </Typography>
              <Box sx={{ pl: "4rem" }}>
                <Button sx={{ marginLeft: "auto" }} variant="contained">
                  SignUp
                </Button>
                <Button sx={{ marginLeft: "10px" }} variant="contained">
                  Login
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: "64px" }}>
            <Item2>
              <Box sx={{ paddingTop: "200px" }}>
                <Lottie animationData={deliverygreen} loop={true} />
                {/* <img src={bg} /> */}
              </Box>
            </Item2>
          </Grid>
        </Grid>
      </Box>
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
