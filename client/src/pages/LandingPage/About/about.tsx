import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
// import im from "../../../images/";

const BoxA = styled.div`
  background-color: yellow;
  padding: 1rem;
  height: 4rem;
  margin: 20rem;
`;

const HeadingA = styled.div`
  font-size: 2rem;
  margin: 6.6rem 20rem;
`;
export interface IAboutProps {}

const About: React.FC<IAboutProps> = (props) => {
  return (
    <div>
      <Grid container xs={12} sx={{ height: "100vh" }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: "black" }}>
            <BoxA></BoxA>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: "blue" }}>sasa</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
