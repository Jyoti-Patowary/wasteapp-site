import { useState, useEffect } from "react";
import { Box, TextField, Toolbar, Button } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Login from "../Buttons/Login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [value, setValue] = useState("2");

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
      url: "http://localhost:4000/login/customer",
      data: {
        email: data.get("email"),
        password: data.get("password"),
      },
      headers: {
        // Authorization: "Bearer " + token,
      },
    };
    let role = ["admin", "customer", "worker"];
    const url = "http://localhost:4000/login/customer";
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
          navigate("/customer-dashboard");
        }
      }
    } catch (err) {
      console.log(err);
      // @ts-ignore
      setError(err.response.data.message || "Error");
    }
  };

  // useEffect(() => {
  //   if (token) {
  //     navigate("/customer-dashboard");
  //   }
  // }, [token]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Admin Login" value="1" />
            <Tab label="Customer Login" value="2" />
            <Tab label="Worker Login" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
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
              Admin LogIn
            </Toolbar>
          </Box>
          <Box component="form" onSubmit={handleSubmit}>
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
          </Box>
          <Button
            type="submit"
            variant="contained"
            //   onClick={() => handleSubmit(e)}
          >
            Login
          </Button>
        </TabPanel>
        <TabPanel value="2">
          {" "}
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
              Customer LogIn
            </Toolbar>
          </Box>
          <TextField
            sx={{ mt: "20px" }}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
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
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            //   onClick={() => handleSubmit(e)}
          >
            Login
          </Button>
        </TabPanel>
        <TabPanel value="3">
          {" "}
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
              Worker LogIn
            </Toolbar>
          </Box>
          <TextField
            sx={{ mt: "20px" }}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
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
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            //   onClick={() => handleSubmit(e)}
          >
            Login
          </Button>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
