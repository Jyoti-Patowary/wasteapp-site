import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
  Modal,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const AdminLogin = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(() =>
    localStorage.getItem("access_token")
  );

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("click");
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const response = {
      method: "post",
      url: "http://localhost:4000/login",
      data: {
        email: data.get("email"),
        password: data.get("password"),
      },
      headers: {
        // Authorization: "Bearer " + token,
      },
    };
    const url = "http://localhost:4000/login";
    const payload = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(payload);

    try {
      const res = await axios.post(url, payload);
      console.log(res);
      if (res.status === 200) {
        console.log(res.data);
        const TOKEN_KEY = "access_token";
        localStorage.setItem(TOKEN_KEY, res.data.token);
        const accessToken = localStorage.getItem(TOKEN_KEY);
        console.log(accessToken);
        if (accessToken) {
          navigate("/admin-dashboard");
        }
      }
    } catch (err) {
      console.log(err);
      // @ts-ignore
      setError(err.response.data.message || "Error");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/admin-dashboard");
    }
  }, [token]);
  return (
    <div>
      <Button sx={{ color: "white", p: "1px 0" }} onClick={handleOpen}>
        Login
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
              LogIn
            </Toolbar>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: "50px",
                width: "25em",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                sx={{ mt: "20px" }}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {/* <TextField
                sx={{ mt: "20px" }}
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirmPassword"
                // value={values.confirmPassword}
                // onChange={handleChange}
            /> */}
              <Button
                type="submit"
                sx={{ color: "aqua", bgcolor: "blueviolet" }}
                //   onClick={() => handleSubmit(e)}
              >
                Login
              </Button>
            </Box>
          </Box>
          <Box></Box>
          <Box
            sx={{ display: "flex", flexDirection: "row-reverse", mt: "6rem" }}
          ></Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminLogin;
