import React, { useEffect } from "react";
import { Button, Box } from "@mui/material";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  max-width: 2200px;
  margin: 5rem 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
  background-color: yellow;
  color: white;
  padding: 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
`;

const History = () => {
  const [tickets, setTickets] = React.useState([]);

  const status = async () => {
    const url = "https://zero-waste-0yjw.onrender.com//tickets";

    const response = await axios.get(url);
    console.log(response.data);
    setTickets(response.data);
  };

  const handleClick = async (id) => {
    const accept = `https://zero-waste-0yjw.onrender.com//ticket/accepted/${id}`;

    const acceptResponse = await axios.post(accept, null, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
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
      <Main>
        {tickets.map((ticket: any, index) => {
          return (
            <Card key={index}>
              <Button
                sx={{
                  color: "white",
                }}
                disabled={!!ticket.receiver}
                onClick={() => handleClick(ticket._id)}
              >
                {!!ticket.receiver ? "Accepted" : "Accept"}
              </Button>
            </Card>
          );
        })}
      </Main>
    </Box>
  );
};

export default History;
