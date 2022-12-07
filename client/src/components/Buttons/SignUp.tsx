import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
  Modal,
  Grid,
  Divider,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
import Radio from "@mui/material/Radio/Radio";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const style = {
  position: "absolute",
  top: "50%",

  left: "50%",
  // ml: "auto",
  // mr: "auto",
  transform: "translate(-50%, -50%)",
  margin: "auto",
  // marginRight:""
  // width: {
  //   xl: "60%",
  //   xs: "30%",
  // },
  width: {
    xs: "80%",
    xl: "35%",
  },

  overflow: "scroll",
  overflowX: "clip",
  height: "80%",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  // m: "0 10px",
  p: 4,
  borderRadius: "10px",

  // "@media max-width(480px)": {
  //   padding: "5px",
  // },
};

interface IFormInputValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: number;
  address: string;
}

function getFormValues() {
  const storedValues = sessionStorage.getItem("TextField");
  if (!storedValues)
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address: "",
    };
  return JSON.parse(storedValues);
}

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState<string | ArrayBuffer | null>("");

  const navigate = useNavigate();
  const [values, setValues] = useState<IFormInputValues>(getFormValues);
  const [selectedValue, setSelectedValue] = useState("customer");

  useEffect(() => {
    sessionStorage.setItem("TextField", JSON.stringify(values));
  }, [values]);

  const handleFileChange = (fileList: FileList | null) => {
    const file = fileList && fileList[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file!);

    fileReader.onloadend = () => {
      setFile(fileReader.result);
    };
  };

  console.log({ file });

  const handleSubmit = async () => {
    // event.preventDefault();
    const { firstname, lastname, email, password, phoneNumber, address } =
      values;

    const url = "https://zero-waste-0yjw.onrender.com//register/user";
    const payload = {
      firstname,
      lastname,
      email,
      password,
      phoneNumber,
      address,
      role: selectedValue,
      photo: file,
    };

    try {
      const res = await axios.post(url, payload);
      console.log(res);
      if (res.status === 200 || res.status == 201) {
        console.log(res.data);
        const TOKEN_KEY = "access_token";
        sessionStorage.setItem(TOKEN_KEY, res.data.token);
        sessionStorage.setItem("id", res.data._id);
        setOpen(false);
      }
    } catch (error) {
      // @ts-ignore
      console.log(error.response.data.error);
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

  function handleRadioBtn(e: React.ChangeEvent<HTMLInputElement>) {
    console.log({ value: e.target.value });
    setSelectedValue(e.target.value);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button sx={{ color: "white", p: "1px 0" }} onClick={handleOpen}>
          Signup
        </Button>
      </Grid>
      <Box
        sx={{
          width: "100%",
          padding: "auto",
          // border: "2px solid red",
        }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid container sx={style} rowGap={2}>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={"bold"}>
                Sign Up
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ mb: 2 }} />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Who are you ?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={selectedValue}
                  onChange={handleRadioBtn}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="customer"
                    control={<Radio />}
                    label="Customer"
                  />
                  <FormControlLabel
                    value="worker"
                    control={<Radio />}
                    label="Worker"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
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
            <Grid item xs={6}>
              <TextField
                required
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="family-name"
                value={values.lastname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ mt: "20px" }}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ mt: "20px" }}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={values.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ mt: "20px" }}
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ mt: "20px" }}
                required
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                type="phoneNumber"
                id="phoneNumber"
                autoComplete="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ mt: "20px" }}
                required
                fullWidth
                name="address"
                label="Address"
                type="address"
                id="address"
                autoComplete="address"
                value={values.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                onChange={(e) => handleFileChange(e.target.files)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                sx={{
                  borderRadius: "10px",
                  mt: "2rem",
                  bgcolor: "blueviolet",
                  color: "whitesmoke",
                }}
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Modal>
      </Box>
    </Grid>
  );
};

export default SignUp;
