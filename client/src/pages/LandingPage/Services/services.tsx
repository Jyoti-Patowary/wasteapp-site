import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { GiTreehouse } from "react-icons/gi";
import { useState, useEffect } from "react";
import { getCustomers, getTickets, getWorkers } from "../../../apis/dashboard";

const Services = () => {
  // const [workers, setWorkers] = useState([]);
  // const [assignedTickets, setAssignedTickets] = useState([]);
  // const [customerData, setCustomerData] = useState([]);

  // const getData = async () => {
  //   try {
  //     const [workers, tickets, customers] = await Promise.all([
  //       getWorkers(),
  //       getTickets(),
  //       getCustomers(),
  //     ]);

  //     console.log(workers);
  //     setWorkers(workers.data);

  //     setAssignedTickets(tickets.data);

  //     setCustomerData(customers.data);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

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
              ???The Earth is what we all have in common.??? ???Time spent among trees
              is never time wasted.??? ???One of the first conditions of happiness
              is that the link between man and nature shall not be broken.??? ???The
              environment is where we all meet; where we all have a mutual
              interest; it is the one thing all of us share.
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
            {/* <LargeText>0{customerData}+</LargeText> */}
            {/* <SmallText>Customer's Joined</SmallText> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <LargeText>0{assignedTickets}+</LargeText> */}
            {/* <SmallText>Order's Received</SmallText> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <LargeText>0{workers}+</LargeText> */}
            {/* <SmallText>Worker's</SmallText> */}
          </Box>
        </TextFlexbox>
      </Container>
    </Box>
  );
};

export default Services;
