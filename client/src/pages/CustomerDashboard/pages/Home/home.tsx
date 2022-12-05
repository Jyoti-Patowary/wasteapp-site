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
  Snackbar,
  AlertColor,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import axios, { Axios, AxiosError } from "axios";
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
} from "../../customerStyles";
import History from "../History/history";
import CardContent from "@mui/material/CardContent";
import { Alert } from "@mui/lab";

const Home = () => {
  const [customerdata, setCustomerdata] = useState<any>([]);
  const [updatedAddress, setUpdatedAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [toggler, setToggler] = useState(false);
  const [open, setOpen] = useState({
    open: false,
    type: "",
    message: "",
  });

  const handleClose = () =>
    setOpen({ open: !open.open, type: open.type, message: open.message });

  const postOrder = async (event: any) => {
    event.preventDefault();
    const url = "http://localhost:4000/create/ticket";

    const TOKEN_KEY = "access_token";
    const accessToken = sessionStorage.getItem(TOKEN_KEY);

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
      if (data.status === 200 || data.status == 201) {
        console.log(data.data);
        setToggler(!toggler);
        setOpen({
          open: true,
          type: "success",
          message: "Ticket has been raised successfully",
        });
        // setCustomerdata(data.data);
      }
    } catch (error: any) {
      // @ts-ignore
      setOpen({
        open: true,
        type: "error",
        message: error.response.data.message,
      });
      // console.log(error.response.data.error);
    }
  };

  const postImage = (fileList: FileList | null) => {
    const file = fileList && fileList[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file!);
    const TOKEN_KEY = "access_token";
    const accessToken = sessionStorage.getItem(TOKEN_KEY);

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
    const userData = JSON.parse(sessionStorage.getItem("userData") as string);
    console.log({ userData });
    setCustomerdata(userData);
    console.log("photo", customerdata.photo);
  }, []);

  return (
    <Box sx={{}}>
      <Snackbar
        open={open.open as boolean}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={open.type as AlertColor}
          sx={{ width: "100%" }}
        >
          {open.message}
        </Alert>
      </Snackbar>
      <HomeMainBox>
        <Grid
          container
          spacing={2}
          mt={10}
          sx={{
            alignItems: "center",
            height: "500px",
          }}
        >
          <Grid
            container
            justifyContent={"space-between"}
            alignItems="center"
            mt={4}
            paddingX={5}
          >
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  m: "0 0 0 0",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Avatar
                  alt="Avatar"
                  src={customerdata.photo}
                  sx={{
                    width: 80,
                    height: 80,
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
                      variant="subtitle2"
                      color={"gray"}
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Welcome back to{" "}
                      <span style={{ fontWeight: "bold" }}>
                        ZERO WASTE MOVEMENT
                      </span>
                    </Typography>
                  </Grid>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} mt={2}>
              <Card
                elevation={2}
                sx={{
                  // backgroundColor: "#4158D0",
                  // backgroundImage:
                  //   "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                  backgroundColor: "#4158D0",
                  backgroundImage:
                    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h5" textAlign={"center"} color="white">
                    Raise a ticket for trash collection :
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      width: "fit-content",
                      mt: 2,
                    }}
                    size="large"
                    color="success"
                    onClick={postOrder}
                  >
                    Request
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <History refresh={toggler} />
          </Grid>
        </Grid>
        {/* <Grid container xs={12} spacing={2} rowGap={2} mt={7}>
          <Grid
            item
            xs={12}
            sx={{ m: "0 0 0 0", display: "flex", alignItems: "center", gap: 4 }}
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
          </Grid>
          <Grid item md={12} xs={12} mt={6}>
            <CardDataView></CardDataView>
          </Grid>
          <Grid item md={2} xs={12} mt={6}>
            <CardDataView>
              <Lottie
                animationData={request}
                style={{ height: "15rem", paddingTop: "1rem" }}
              />
              <Button onClick={postOrder} >Make a Request</Button>
            </CardDataView>
          </Grid> */}
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
        {/* <Grid item md={4} xs={12}>
            <CardDataView>Recent Order Placed: </CardDataView>
          </Grid>
          <Grid item md={4} xs={12}>
            <CardDataView>Total Order Placed: </CardDataView>
          </Grid>
          <Grid item md={4} xs={12}>
            <CardDataView>Recent Order Placed: </CardDataView>
          </Grid> */}
        {/* </Grid> */}
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
