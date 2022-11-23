import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
  Modal,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "60vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  m: "0 10px",
  p: 4,
};

interface IFormInputValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  // status: any
}

function getFormValues() {
  const storedValues = localStorage.getItem("TextField");
  if (!storedValues)
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  return JSON.parse(storedValues);
}

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const [values, setValues] = useState<IFormInputValues>(getFormValues);

  useEffect(() => {
    localStorage.setItem("TextField", JSON.stringify(values));
  }, [values]);

  const handleSubmit = async () => {
    // event.preventDefault();
    const { firstname, lastname, email, password, confirmPassword } = values;

    // const res = await fetch("http://localhost:4000/user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     firstname,
    //     lastname,
    //     email,
    //     password,
    //     confirmPassword,
    //   }),
    // });

    // const data = await res.json();

    // if(data.status(401) || !data){
    //   window.alert("Invalid")
    //   console.log("Invalid")
    // }else{
    //   window.alert("Success")
    //   console.log("Success")

    // }

    const url = "http://localhost:4000";
    const payload = {
      firstname,
      lastname,
      email,
      password,
    };

    try {
      const data = await axios.post(url, payload);
      if (data.status === 200) {
        console.log(data.data);
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

  return (
    <div>
      <Button sx={{ color: "white", p: "1px 0" }} onClick={handleOpen}>
        Signup
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <div style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}> */}
          <Box>
            <Toolbar
              sx={{
                bgcolor: "blueviolet",
                color: "white",
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              Signup
            </Toolbar>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <Box
              sx={{
                mt: "50px",
                width: "25em",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "25em",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  autoFocus
                  value={values.firstname}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ mt: "20px" }}
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                  value={values.lastname}
                  onChange={handleChange}
                />
              </Box>
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
            </Box>
          </Box>
          <Box></Box>
          <Box
            sx={{ display: "flex", flexDirection: "row-reverse", mt: "6rem" }}
          >
            <Button
              sx={{ color: "aqua", bgcolor: "blueviolet" }}
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SignUp;
