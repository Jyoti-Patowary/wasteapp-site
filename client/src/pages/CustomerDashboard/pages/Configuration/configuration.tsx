import React, { useState, useEffect } from "react";
import {
  Box,
  styled,
  Grid,
  Typography,
  Card,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { ConfigurationMainBox } from "../../../CustomerDashboard/customerStyles";
import Lottie from "lottie-react";
import update from "../../../../LottieFiles/Update.json";
import {
  getCustomers,
  updateCustomerData,
} from "../../../../apis/customerDashboard";
import { IFormInputValues } from "../../../../models/customerFormModel";
import axios from "axios";
import API from "../../../../apis/index";
import { useNavigate } from "react-router-dom";

const initialFormValue: IFormInputValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: 0,
  address: "",
};

const Configuration = () => {
  const [updateCustomer, setUpdateCustomer] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [values, setValues] = useState<IFormInputValues>(initialFormValue);

  const [file, setFile] = useState<string | ArrayBuffer | null>("");

  //get id
  const userId = sessionStorage.getItem("id");

  const handleFileChange = (fileList: FileList | null) => {
    const file = fileList && fileList[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file!);

    fileReader.onloadend = () => {
      setFile(fileReader.result);
    };
  };

  const navigate = useNavigate();

  // const updateData: any = async () => {
  //   try {
  //     const [updateCustomer, customers] = await Promise.all([
  //       // updateCustomerData(),
  //       getCustomers(),
  //     ]);

  //     setUpdateCustomer(updateCustomer.data);
  //     console.log("uff ", updateCustomer.data);
  //     setCustomers(customers.data);
  //   } catch (error) {}
  // };

  useEffect(() => {
    // updateData();
  });

  const handleSubmit = async () => {
    const { firstname, lastname, email, password, phoneNumber, address } =
      values;
    console.log("form submit ", values);

    //format data
    const payload = {
      firstname,
      lastname,
      email,
      password,
      phoneNumber,
      address,
      photo: file,
    };

    try {
      // const res = await updateCustomerData(userId, payload);
      const url = `/update/${userId}`;
      const res = await API.put(url, payload);
      console.log("res ", res);
      console.log("res ", res?.status);
      if (res.status == 200 || res.status == 201) {
        window.alert("Successfully Updated");
        navigate("/");
      }
    } catch (error: any) {
      console.log("error in form submit ", error);
      window.alert("Unsuccessfull!");
    }
  };

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
    <Box sx={{ backgroundColor: "#dde1e7", height: "100%" }}>
      <ConfigurationMainBox>
        <Grid container spacing={3} marginTop={7}>
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
              Configuration ! yup
            </Typography>
          </Grid>
          <Grid container xs={12} md={12}>
            <Card
              sx={{
                height: "85%",
                m: "2rem 0 2rem 0",
                bgcolor: "#dde1e7",
                width: "120rem",
                p: "2rem",
                borderRadius: "10px",
                boxShadow:
                  "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
              }}
            >
              <Grid item xs={12} md={12}>
                <Typography variant="h5" fontWeight={"bold"}>
                  Update Your Profile
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ mb: 4 }} />
              </Grid>
              <Grid
                container
                xs={12}
                sx={{
                  display: "flex",

                  justifyContent: "space-between ",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Box sx={{ flex: 1 }}>
                    <Lottie
                      animationData={update}
                      style={{ height: "35rem" }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Grid container xs={12} spacing={2}>
                      <Grid item xs={12} md={6}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="firstname"
                          required
                          id="firstname"
                          label="First Name"
                          autoFocus
                          value={values.firstname}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="lastname"
                          required
                          id="lastname"
                          label="Last Name"
                          autoFocus
                          value={values.lastname}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="email"
                          required
                          id="email"
                          label="Email"
                          autoFocus
                          value={values.email}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="phoneNumber"
                          required
                          id="phoneNumber"
                          label="Phone Number"
                          autoFocus
                          value={values.phoneNumber}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="password"
                          required
                          id="password"
                          label="Password"
                          autoFocus
                          value={values.password}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="confirmPassword"
                          required
                          id="confirmPassword"
                          label="Confirm Password"
                          autoFocus
                          value={values.confirmPassword}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {" "}
                        <TextField
                          fullWidth
                          autoComplete="given-name"
                          name="address"
                          required
                          id="address"
                          label="Address"
                          autoFocus
                          value={values.address}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Button variant="contained" component="label">
                          Upload
                          <input
                            hidden
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) => handleFileChange(e.target.files)}
                          />
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Button
                          fullWidth
                          sx={{
                            borderRadius: "10px",
                            mt: "1rem",
                            width: "100%",
                            bgcolor: "blueviolet",
                            color: "whitesmoke",
                            "&:hover": {
                              bgcolor: "blue",
                            },
                          }}
                          onClick={() => handleSubmit()}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </ConfigurationMainBox>
    </Box>
  );
};

export default Configuration;
