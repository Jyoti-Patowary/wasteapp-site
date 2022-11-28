import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import { CiMobile3 } from "react-icons/ci";

const Contact = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box
      sx={{
        mt: 5,
        py: 10,
        mr: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Contact Us
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Everything you need to know !
          </Typography>
        </PropertiesTextBox>
      </Container>

      <CiMobile3 color="red" size={150} />
    </Box>
  );
};

export default Contact;
