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

interface IFormInputValues {
  address: string;
  phoneNumber: string;
  date: any;
  // status: any
}

function getOrderValues() {
  const storedValues = localStorage.getItem("TextField");
  if (!storedValues)
    return {
      address: "",
      phoneNumber: "",
      date: "",
    };
  return JSON.parse(storedValues);
}

const Home = () => {
  const [customerdata, setCustomerdata] = useState<any>([]);
  const [updatedAddress, setUpdatedAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [values, setValues] = useState<IFormInputValues>({
    address: "",
    date: "",
    phoneNumber: "",
  });

  const postOrder = async (event: any) => {
    event.preventDefault();
    console.log("clicked");
    const url = "http://localhost:4000/create/ticket";

    const TOKEN_KEY = "access_token";
    const accessToken = localStorage.getItem(TOKEN_KEY);

    try {
      const data = await axios.post(
        url,
        {
          requestedDate: Date.now(),
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (data.status === 200) {
        console.log(data.data);
        // setCustomerdata(data.data);
      }
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data.error);
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") as string);
    console.log({ userData });
    setCustomerdata(userData);
  }, []);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    console.log(`Typed => ${event.target.value}`);

    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

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
          <Box component="form" onSubmit={postOrder}>
            <TextField
              variant="outlined"
              label="address"
              sx={{ m: "2rem" }}
              name="address"
              value={values.address}
              onChange={handleChange}
            />
            <TextField variant="outlined" label="date" />
            <TextField
              variant="outlined"
              label="phoneNumber"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            <Button type="submit">Order</Button>
          </Box>
        </Box>
      </Card>
    </Main>
  );
};

export default Home;
