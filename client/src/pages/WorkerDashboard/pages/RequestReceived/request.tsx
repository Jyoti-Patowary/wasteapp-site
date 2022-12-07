import React, { useEffect } from "react";
import { Button, Box, Grid, Typography, Select, MenuItem } from "@mui/material";
import axios from "axios";
import styled from "styled-components";
import { HistoryMainBox } from "../../../CustomerDashboard/customerStyles";
import { getCustomers, getTickets } from "../../../../apis/workerDashboard";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField/TextField";
import { BiSearch } from "react-icons/bi";

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
  box-shadow: 5px 5px 15px 1px #ccc;
  border-radius: 8px;
  padding: 1rem;
  // height: 4rem;
  // display: flex;
  // align-items: center;
  margin-top: 2rem;
`;

const boxStyle = {
  // border: "2px solid black",
  borderRadius: 2,
  margin: "5px",
  paddingInline: "4px",
  paddingBlock: "3px",
  // height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const RequestReceived = () => {
  const [tickets, setTickets] = React.useState<any[]>([]);
  const [customers, setCustomers] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("all");

  const status = async () => {
    const [customers, tickets] = await Promise.all([
      getCustomers(),
      getTickets(search, filter == "all" ? "" : filter),
    ]);

    setCustomers(customers.data);
    setTickets(tickets.data);
  };

  const handleClick = async (id, action = "accepted") => {
    const url = `https://zero-waste-0yjw.onrender.com/ticket/${action}/${id}`;

    const acceptResponse = await axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      },
    });

    status();
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e: any) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    status();
  }, [search, filter]);

  return (
    <Box>
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
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={3}>
            <TextField
              size="small"
              fullWidth
              placeholder="Search ticket"
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <BiSearch size={20} style={{ marginRight: "10px" }} />
                ),
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Select value={filter} size="small" onChange={handleSelect}>
              <MenuItem value="all">All Tickets</MenuItem>
              <MenuItem value="isOpen">Open Tickets</MenuItem>
              <MenuItem value="isAssigned">Pending Tickets</MenuItem>
              <MenuItem value="isClosed">Closed Ticket</MenuItem>
            </Select>
          </Grid>
        </Grid>
        {/* <Grid container xs={12}> */}
        <Main>
          {tickets.length ? (
            tickets.map((ticket: any, index) => {
              return (
                <Card key={index}>
                  <Box sx={boxStyle}>
                    <Typography sx={{ color: "black" }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "dodgerblue" }}
                      >
                        {" "}
                        {ticket.raiser.firstname + " " + ticket.raiser.lastname}
                      </Typography>
                      <Typography
                        variant="caption"
                        component={"p"}
                        sx={{ marginTop: "-5px" }}
                      >
                        Customer Name
                      </Typography>
                    </Typography>
                    <Chip
                      label={ticket.ticketNo}
                      color={
                        ticket.status === "isClosed" ? "secondary" : "primary"
                      }
                      style={{ textTransform: "uppercase", fontWeight: "bold" }}
                    />
                  </Box>

                  <Box sx={boxStyle}>
                    <Typography sx={{ color: "black", fontWeight: "bold" }}>
                      Address :{" "}
                      <span style={{ fontWeight: "lighter" }}>
                        {ticket.raiser.address}
                      </span>
                    </Typography>
                  </Box>

                  <Box sx={boxStyle}>
                    {/* <Typography sx={{ color: "black", fontWeight: "bold" }}>
                    Status
                  </Typography> */}
                    <Button
                      color={
                        ticket.status == "isClosed" ? "success" : "primary"
                      }
                      variant="contained"
                      disabled={ticket.status == "isClosed"}
                      onClick={() =>
                        handleClick(
                          ticket._id,
                          ticket.status == "isOpen" ? "accepted" : "close"
                        )
                      }
                    >
                      {ticket.status == "isAssigned"
                        ? "Close ticket"
                        : ticket.status === "isOpen"
                        ? "Accept"
                        : "Closed"}
                    </Button>
                  </Box>
                </Card>
              );
            })
          ) : (
            <Grid container mt={4}>
              <Grid item xs={12}>
                No tickets found
              </Grid>
            </Grid>
          )}
        </Main>
        {/* </Grid> */}
      </HistoryMainBox>
    </Box>
  );
};

export default RequestReceived;
