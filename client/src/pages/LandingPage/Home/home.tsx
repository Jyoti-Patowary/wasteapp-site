import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import React from "react";
import Lottie from "lottie-react";
import deliverygreen from "../../../LottieFiles/deliverygreen.json";
import bg from "../../../images/clouds.jpg";
import SignUp from "../../../components/Buttons/SignUp";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import Card from "@mui/material/Card";

// const Main = styled.div`
//   diplay: flex;
//   justify-content: center;
//   height: 800px;
//   align-items: center;
//   padding: 0 30px;
//   background: blue;
//   z-index: 1;
//   position: relative;
// `;

// const MainBG = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   z-index: 10;
// `;

// const ImageBG = styled.div`
//   width: 100%;
//   height: 100%;
//   background: cover;
// `;

// const MainC = styled.div`
//   z-index: 3;
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 1200px;
//   padding: 110px 450px;

//   @media screen and (max-width: 768px) {
//     padding: 258px 24px;
//   }

//   @media screen and (max-width: 480px) {
//     padding: 8px 24px;
//   }
// `;

// const MainH = styled.h1`
//   color: black;
//   font-size: 90px;
//   text-align: center;
//   justify-content: center;
//   padding-top: 80px;

//   @media screen and (max-width: 768px) {
//     font-size: 34px;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 18px;
//   }
// `;

// const MainP = styled.p`
//   margin-top: 24px;
//   color: black;
//   font-size: 24px;
//   text-align: center;
//   max-width: 600px;
// `;

// const MainBtn = styled.div``;

// const Button = styled.div`
//   margin-top: 32px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ArrowF = styled(MdKeyboardArrowRight)`
//   margin-left: 8px;
//   font-size: 20px;
// `;

// const ArrowB = styled(MdArrowForward)`
//   margin-left: 8px;
//   font-size: 20px;
// `;

function Home() {
  const HomeContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${bg})`,
    // backgroundSize: "cover",
    height: "500px",
    zIndex: "-10px",
  }));

  const [hover, setHover] = React.useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Box sx={{ backgroundColor: "#dde1e7" }}>
      <HomeContainer>
        <Typography sx={{ zIndex: 10, color: "black" }}>
          Let's make our Environment Clean and Green
        </Typography>
      </HomeContainer>
    </Box>
  );
  // return (
  //   <Main>
  //     <MainBG>
  //       <ImageBG>
  //         <img src={bg} />
  //       </ImageBG>
  //     </MainBG>
  //     <MainC>
  //       <MainH>Let's make our environment clean and green</MainH>
  //       <MainP>
  //         Sign up for a new account today and receive 3 week free pickup
  //       </MainP>
  //       <MainBtn>
  //         <Button onMouseEnter={onHover} onMouseLeave={onHover}>
  //           Get Started {hover ? <ArrowF /> : <ArrowB />}
  //         </Button>
  //       </MainBtn>
  //     </MainC>
  //   </Main>
  // );
}

export default Home;
