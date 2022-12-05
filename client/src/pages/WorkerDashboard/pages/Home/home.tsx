import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Input,
  Divider,
  Avatar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { GiPhotoCamera } from "react-icons/gi";
import styled from "styled-components";
import Lottie from "lottie-react";
import request from "../../../../LottieFiles/Request.json";
import {
  CardDataView,
  HomeMainBox,
  ProfileCard,
  ProfileTable,
} from "../../../CustomerDashboard/customerStyles";

import API from "../../../../apis/index";
import CircularProgress from "@mui/material/CircularProgress";

const Card = styled.div`
background-color: white;
color: black;
box-shadow:
-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);
display: flex;
justify-content: space-evenly;
padding: 1rem;
height: 4rem;
display: flex;
align-items: center
}
`;

const Home = () => {
  const [customerdata, setCustomerdata] = useState<any>([]);
  const [updatedAddress, setUpdatedAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");

  const [allTicketsCount, setAllTicketsCount] = React.useState<any>(null);

  //get id
  const userId = localStorage.getItem("id");

  const functionSetAllTicketsCount = async () => {
    try {
      // const res = await updateCustomerData(userId, payload);
      const url = `/tickets/count/${userId}`;
      const res = await API.get(url);
      setAllTicketsCount(res.data);
      console.log("allTicketsCount ", res.data);
    } catch (error: any) {
      console.log("error in form submit ", error);
      window.alert("Unsuccessfull!");
    }
  };

  useEffect(() => {
    functionSetAllTicketsCount();
  }, []);

  const postImage = (fileList: FileList | null) => {
    const file = fileList && fileList[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file!);
    const TOKEN_KEY = "access_token";
    const accessToken = localStorage.getItem(TOKEN_KEY);

    fileReader.onloadend = async () => {
      const data = await axios.post(
        "http://localhost:4000/user/upload",
        {
          photo: fileReader.result,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log({ data });
    };
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") as string);
    console.log({ userData });
    // let role = userData.data.role.toLowerCase();
    setCustomerdata(userData);
    console.log("photo", customerdata.photo);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#dde1e7" }}>
      <HomeMainBox>
        <Grid
          container
          // spacing={0}
          // sx={{
          //   alignItems: "center",
          //   height: "400px",
          // }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                m: "8rem 0 0 0",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Avatar
                alt="Avatar"
                src={customerdata.photo}
                sx={{
                  width: 120,
                  height: 120,
                  border: "solid 5px #fff",
                  zIndex: "-10px",
                  boxShadow:
                    "-5px -15px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
                }}
              />
              <div>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  sx={{
                    display: "flex",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Hello, {customerdata.firstname} !
                </Typography>
                <Grid item xs={12} sx={{ m: "0 0 0 0" }}>
                  <Typography
                    variant="h5"
                    color={"gray"}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    WELCOME BACK TO ZERO WASTE MOVEMENT
                  </Typography>
                </Grid>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box></Box>
          </Grid>
        </Grid>
        <Grid container xs={12} md={12} mt={4} spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <Typography>Open Orders : </Typography>
              {allTicketsCount ? (
                <Typography>{allTicketsCount?.noOfOpenOrders}</Typography>
              ) : (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              )}
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              Accepted Orders :
              {allTicketsCount ? (
                <Typography>{allTicketsCount?.noOfAcceptedOrders}</Typography>
              ) : (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              )}
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              Total Number of Orders{" : "}
              {allTicketsCount ? (
                <Typography>
                  {allTicketsCount?.noOfOpenOrders +
                    allTicketsCount?.noOfAcceptedOrders}
                </Typography>
              ) : (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              )}
            </Card>
          </Grid>
        </Grid>
      </HomeMainBox>
    </Box>
  );
};

export default Home;
