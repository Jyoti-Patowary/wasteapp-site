import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Input,
  Divider,
  Avatar,
  CardMedia,
  Card,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { GiPhotoCamera } from "react-icons/gi";
import styled from "styled-components";
import {
  CardDataView,
  HomeMainBox,
  ProfileCard,
  ProfileTable,
} from "./homeStyles";

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
    setCustomerdata(userData);
    console.log("photo", customerdata.photo);
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
    <Box sx={{ backgroundColor: "#dde1e7" }}>
      <HomeMainBox>
        <Grid container xs={12} spacing={1}>
          <Grid item md={12} xs={12} sx={{ position: "relative" }}>
            {/* {customerdata?.photo[1] ? (
              <Card>
                <CardMedia
                  component="img"
                  image={customerdata.photo[1]}
                  alt="cover photo"
                  sx={{
                    backgroundColor: "#dde1e7",
                    height: "10rem",
                    borderRadius: "8px",
                    boxShadow:
                      "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
                  }}
                />
              </Card>
            ) : null} */}
            {/* console.log(customerdata.photo[1]) */}
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                accept="image/*"
                type="file"
                onChange={(e) => postImage(e.target.files)}
              />
            </IconButton>
            <Avatar
              alt="Remy Sharp"
              // src={customerdata.photo[0]}
              sx={{
                width: 150,
                height: 150,
                position: "absolute",
                top: "1rem",
                right: "8rem",
                boxShadow:
                  "-5px -15px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
                transform: "translateY(30%)",
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ m: "0 0 0 0" }}>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              sx={{
                display: "flex",
                // ml: "1rem",
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
                  // ml: "1rem",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                WELCOME BACK TO ZERO WASTE MOVEMENT
              </Typography>
            </Grid>
          </Grid>

          {/* <Grid item md={3} xs={12}>
            <ProfileTable>
              <Grid
                container
                xs={12}
                md={12}
                sx={{ p: "2rem", m: "1rem 0 0 0", color: "gray" }}
              >
                <Grid item md={4} xs={12}></Grid>
                <Grid item md={12} xs={12} sx={{ m: "2rem 0 2rem 0" }}>
                  <Typography
                    variant="h5"
                    color={"gray"}
                    sx={{
                      fontWeight: "bold",
                      boxShadow:
                        "inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3);",
                    }}
                  >
                    CONTACT INFORMATION
                  </Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                  First Name :
                </Grid>
                <Grid item md={6} xs={6} sx={{ mb: "1rem" }}>
                  {customerdata.firstname}
                </Grid>
                <Grid item md={6} xs={6}>
                  Last name :
                </Grid>
                <Grid item md={6} xs={6} sx={{ mb: "1rem" }}>
                  {customerdata.lastname}
                </Grid>
                <Grid item md={6} xs={6}>
                  Email :
                </Grid>
                <Grid item md={6} xs={6} sx={{ mb: "1rem" }}>
                  {customerdata.email}
                </Grid>
                <Grid item md={6} xs={6}>
                  Mobile
                </Grid>
                <Grid item md={6} xs={6} sx={{ mb: "1rem" }}>
                  {customerdata.phoneNumber}
                </Grid>
                <Grid item md={6} xs={6}>
                  Address
                </Grid>
                <Grid item md={6} xs={6} sx={{ mb: "1rem" }}>
                  {customerdata.address}
                </Grid>
                <Grid item md={12} xs={6} sx={{ mb: "1rem" }}>
                  <Button
                    fullWidth
                    sx={{
                      borderRadius: "10px",
                      mt: "2rem",
                      bgcolor: "blueviolet",
                      color: "whitesmoke",
                    }}
                  >
                    Update
                  </Button>
                </Grid>
              </Grid>
            </ProfileTable>
          </Grid> */}
          <Grid item md={4} xs={12} marginTop={15}>
            <CardDataView>Recent Order Placed: </CardDataView>
          </Grid>
          <Grid item md={4} xs={12} marginTop={15}>
            <CardDataView>Total Order Placed: </CardDataView>
          </Grid>
          <Grid item md={4} xs={12} marginTop={15}>
            <CardDataView>Recent Order Placed: </CardDataView>
          </Grid>
        </Grid>
      </HomeMainBox>
    </Box>

    // <Grid container spacing={2}>
    //   <HomeMainBox>
    //     <Grid item xs={12}>
    //
    //     </Grid>
    //     <Grid container xs={12} direction="column" columnGap={5}>
    //       <Grid item xs={6} md={12}>
    //         <CardDataView>Recent Order Placed: </CardDataView>
    //       </Grid>
    //       <Grid item xs={12} columnGap={5}>
    //         <CardDataView></CardDataView>
    //       </Grid>
    //     </Grid>
    //     {/* <Box>
    //         <Typography variant="h6" sx={{ display: "flex", mt: "5rem" }}>
    //           Request for Worker
    //         </Typography>
    //         <Box component="form" onSubmit={postOrder}>
    //           <TextField
    //             variant="outlined"
    //             label="address"
    //             sx={{ m: "2rem" }}
    //             name="address"
    //             value={values.address}
    //             onChange={handleChange}
    //           />
    //           <TextField variant="outlined" label="date" />
    //           <TextField
    //             variant="outlined"
    //             label="phoneNumber"
    //             name="phoneNumber"
    //             value={values.phoneNumber}
    //             onChange={handleChange}
    //           />
    //           <Button type="submit">Order</Button>
    //         </Box> */}
    //     {/* </Box> */}
    //   </HomeMainBox>
    // </Grid>
  );
};

export default Home;
