import React from "react";
import { AppBar } from "../../components/Navbar/navbar";
import About from "./About/about";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
import Home from "./Home/home";
import Services from "./Services/services";

const MainHome = () => {
  return (
    <div>
      <AppBar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainHome;
