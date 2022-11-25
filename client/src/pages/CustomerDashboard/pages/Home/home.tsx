import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Main = styled.div`
  max-width: 2200px;
  margin: 1.5rem;
  display: grid;
  // gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
background-color: gray;
color: white;
padding: 20px;
height: 45rem;
display: flex;
// align-items: center,
// justify-content: center
}
`;

// interface Itypes {
//   customerID : any;
//   address: String;
//   date: any;
//   phoneNumber: Number;
// }

const Home = () => {
  const [customerdata, setCustomerdata] = useState<any>([]);
  const [updatedAddress, setUpdatedAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");

  const fetchCustomerData = () => {
    return axios
      .get("http://localhost:4000/customer/637f92371ed043c7fd1a7438")
      .then((Response) => setCustomerdata(Response.data));
  };

  const postOrder = async () => {
    console.log("clicked");
    const payload = {
      customerID: customerdata._id,
      address: updatedAddress,
      date: new Date(),
      phoneNumber: phoneNumber,
    };
    const res = await createOrder(payload);
  };

  useEffect(() => {
    fetchCustomerData();
    console.log("Checking data....");
  }, []);

  return (
    <Main>
      <Card>
        <Typography variant="h4">
          Welcome Back {customerdata.firstname} {customerdata.lastname}
        </Typography>{" "}
        <Box>
          <Typography variant="h6" sx={{ display: "flex", mt: "5rem" }}>
            Request for Worker
          </Typography>
          <Box component="form" onSubmit={() => postOrder()}>
            <TextField
              variant="outlined"
              label="address"
              sx={{ m: "2rem" }}
              value={updatedAddress}
              onChange={(e) => {
                setUpdatedAddress(e.target.value);
              }}
            />
            <TextField variant="outlined" label="date" />
            <TextField
              variant="outlined"
              label="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <Button type="submit">Order</Button>
          </Box>
        </Box>
      </Card>
    </Main>
  );
};

export default Home;
