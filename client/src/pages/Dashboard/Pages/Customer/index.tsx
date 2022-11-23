import React from "react";
import styled from "styled-components";
import CustomerDataTable from "./dataTable";

const Main = styled.div`
  margin: 2rem;
`;

const Customer = () => {
  return (
    <Main>
      <CustomerDataTable />
    </Main>
  );
};

export default Customer;
