import React, { useEffect } from "react";
import { Button, Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import styled from "styled-components";
import { HistoryMainBox } from "../../../CustomerDashboard/customerStyles";
import { getCustomers, getTickets } from "../../../../apis/workerDashboard";

const Main = styled.div`
  max-width: 2200px;
  // margin: 5rem 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const Card = styled.div`
  background-color: white;
  color: white;
  padding: 1rem;
  // height: 4rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const boxStyle = {
  border: "2px solid black",
  borderRadius: 2,
  margin: "5px",
  paddingInline: "4px",
  paddingBlock: "3px",
  height: "100%",
  display: "flex",
  alignItems: "center",
};

const RequestReceived = () => {
  const [tickets, setTickets] = React.useState<any[]>([]);
  const [customers, setCustomers] = React.useState([]);

  const status = async () => {
    const [customers, tickets] = await Promise.all([
      getCustomers(),
      getTickets(),
    ]);

    setCustomers(customers.data);
    setTickets(tickets.data);

    // const url = "http://localhost:4000/tickets";

    // const response = await axios.get(url);
    // console.log(response.data);
    // setTickets(response.data);
  };

  const handleClick = async (id) => {
    const accept = `http://localhost:4000/ticket/accepted/${id}`;

    const acceptResponse = await axios.post(accept, null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    status();
    console.log(acceptResponse.data);
  };

  useEffect(() => {
    status();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#dde1e7" }}>
      <HistoryMainBox>
        <Grid container spacing={3} mt={12}>
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
              Request Received !
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid container xs={12}> */}
        <Main>
          {tickets.map((ticket: any, index) => {
            return (
              <Card key={index}>
                <Box sx={boxStyle}>
                  <Typography sx={{ color: "black" }}>
                    Customer Name :{" "}
                    {ticket.raiser.firstname + " " + ticket.raiser.lastname}
                  </Typography>
                </Box>

                <Box sx={boxStyle}>
                  <Typography sx={{ color: "black" }}>
                    Address : {ticket.raiser.address}
                  </Typography>
                </Box>

                <Box sx={boxStyle}>
                  <Typography sx={{ color: "black" }}>Status</Typography>
                  <Button
                    sx={{
                      color: "red",
                    }}
                    disabled={!!ticket.receiver}
                    onClick={() => handleClick(ticket._id)}
                  >
                    {!!ticket.receiver ? "Accepted" : "Accept"}
                  </Button>
                </Box>
              </Card>
            );
          })}
        </Main>
        {/* </Grid> */}
      </HistoryMainBox>
    </Box>
  );
};

export default RequestReceived;
