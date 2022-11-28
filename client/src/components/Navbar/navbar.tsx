import { Button } from "@mui/material";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import SignUp from "../Buttons/SignUp";
import LoginModal from "../Modal/modal";

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 10;
  background-color: #000;
  height: 80px;
  top: 0;
  font-size: 1rem;
  margin-top: -80px;
`;

const NContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weigth: bold;
  text-decoration: none;
`;

const NavB = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AppBar = () => {
  return (
    <Navbar>
      <NContainer>
        <NLogo<any>>Zero Waste</NLogo>
        <NavB>
          <Button variant="contained" sx={{ background: "green" }}>
            <LoginModal />
          </Button>
          <Button variant="contained" sx={{ background: "green" }}>
            <SignUp />
          </Button>
        </NavB>
      </NContainer>
    </Navbar>
  );
};
