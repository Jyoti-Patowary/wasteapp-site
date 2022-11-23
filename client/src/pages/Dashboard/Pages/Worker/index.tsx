import React from "react";
import styled from "styled-components";
import WorkerDataTable from "./dataTableWorker";

const Main = styled.div`
  margin: 2rem;
`;

const Worker = () => {
  return (
    <Main>
      <WorkerDataTable />
    </Main>
  );
};

export default Worker;
