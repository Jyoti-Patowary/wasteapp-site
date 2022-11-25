import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import styled from "styled-components";

const Main = styled.div`
  max-width: 2200px;
  margin: 1.5rem;
  display: grid;
  // gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
background-color: red;
color: white;
padding: 20px;
height: 45rem;
display: flex;
// align-items: center,
// justify-content: center
}
`;

const Request = () => {
  return (
    <Main>
      <Card>
        <Box component="form">
          <TextField
            autoComplete="given-name"
            name="firstname"
            required
            fullWidth
            id="firstname"
            label="First Name"
            autoFocus
            // value={values.firstname}
            // onChange={handleChange}
            sx={{ m: "20px", maxWidth: "20rem" }}
          />
          <TextField
            autoComplete="given-name"
            name="firstname"
            required
            fullWidth
            id="firstname"
            label="First Name"
            autoFocus
            // value={values.firstname}
            // onChange={handleChange}
            sx={{ m: "20px", maxWidth: "20rem" }}
          />
          <TextField
            autoComplete="given-name"
            name="firstname"
            required
            fullWidth
            id="firstname"
            label="First Name"
            autoFocus
            // value={values.firstname}
            // onChange={handleChange}
            sx={{ m: "20px", maxWidth: "20rem" }}
          />
          <TextField
            autoComplete="given-name"
            name="firstname"
            required
            fullWidth
            id="firstname"
            label="First Name"
            autoFocus
            // value={values.firstname}
            // onChange={handleChange}
            sx={{ m: "20px", maxWidth: "20rem" }}
          />
          <TextField
            autoComplete="given-name"
            name="firstname"
            required
            fullWidth
            id="firstname"
            label="First Name"
            autoFocus
            // value={values.firstname}
            // onChange={handleChange}
            sx={{ m: "20px", maxWidth: "20rem" }}
          />
          <TextField
            autoComplete="given-name"
            name="firstname"
            required
            fullWidth
            id="firstname"
            label="First Name"
            autoFocus
            // value={values.firstname}
            // onChange={handleChange}
            sx={{ m: "20px", maxWidth: "20rem" }}
          />
          <TextField
            autoComplete="given-name"
            name="firstname"
            required
            fullWidth
            id="firstname"
            label="First Name"
            autoFocus
            // value={values.firstname}
            // onChange={handleChange}
            sx={{ m: "20px", maxWidth: "20rem" }}
          />
        </Box>
      </Card>
    </Main>
  );
};

export default Request;
