import React, { useState, useEffect } from "react";
import { Toolbar, Button, Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(() =>
    localStorage.getItem("access_token")
  );

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const payload = {
      email,
      password,
    };

    try {
      const url = "http://localhost:4000/login/user";
      const res = await axios.post(url, payload);
      console.log(res);
      if (res.status === 200) {
        console.log(res.data.role);

        const TOKEN_KEY = "access_token";
        localStorage.setItem(TOKEN_KEY, res.data.token);
        localStorage.setItem("id", res.data._id);

        const accessToken = localStorage.getItem(TOKEN_KEY);
        console.log(accessToken);
        if (accessToken && res.data.role) {
          let role = res.data.role.toLowerCase();
          localStorage.setItem("userData", JSON.stringify(res.data));
          navigate(`/${role}-dashboard`);
        } else {
          throw new Error("A user must have a role assigned");
        }
      }
    } catch (err) {
      console.log(err);
      // @ts-ignore
      setError(err.response.data.message || "Error");
    }
  };

  return (
    <div>
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
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          sx={{ mt: "40px" }}
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
      </Box>
      <Button
        type="submit"
        variant="contained"
        sx={{
          borderRadius: "10px",
          mt: "2rem",
          width: "26rem",
          bgcolor: "blueviolet",
        }}
        onClick={handleSubmit}
      >
        Login
      </Button>
      <Box sx={{ mt: "2rem" }}>
        <Typography>Don't have an account ?</Typography>
      </Box>
    </div>
  );
};
