import React from "react";
import styled from "styled-components";

const ServiceM = styled.div`
  max-width: 2200px;
  height: 100vh;
  display: grid;
  background-color: red;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const HeadingM = styled.div`
  font-size: ;
`;

function Services() {
  return (
    <ServiceM>
      <HeadingM></HeadingM>
    </ServiceM>
  );
}

export default Services;
