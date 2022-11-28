import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { GiTreehouse } from "react-icons/gi";

const Services = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "white",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "white",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "black", color: "white" }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <GiTreehouse size={200} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "white",
                fontWeight: "700",
                my: 3,
              }}
            >
              Starting Clean and Green Movement
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "white",
                lineHeight: "27px",
              }}
            >
              When you own a home, you commit to living in one location for a
              period of time. We are here to ensure that this will be a
              memorable experience for you.
            </Typography>
          </Box>
        </CustomBox>

        <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>00010+</LargeText>
            <SmallText>Customer's Joined</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>00020+</LargeText>
            <SmallText>Order's Received</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>00100+</LargeText>
            <SmallText>Worker's</SmallText>
          </Box>
        </TextFlexbox>
      </Container>
    </Box>
  );
};

export default Services;
