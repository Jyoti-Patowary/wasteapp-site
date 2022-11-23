import React, { createContext } from "react";
import styled from "styled-components";
import { cardContext } from "./cardContext";
import Cards from "./cards";

const Main = styled.div`
  margin: 2rem auto 2rem auto;
`;

const Heading = styled.div`
  margin: 0 1rem 1rem 1rem;
  font-size: 2rem;
  font-weight: 12rem;
`;
const Para = styled.div`
  margin: 0 1rem 1rem 1rem;
  font-size: 1rem;
`;

const Overview = () => {
  return (
    <Main>
      <Heading>DASHBOARD</Heading>
      <Para>Welcome to Your Dashboard</Para>
      <Cards />
    </Main>
  );
};

export default Overview;
