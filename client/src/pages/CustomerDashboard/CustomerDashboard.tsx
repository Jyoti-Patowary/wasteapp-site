import React from "react";
import { Route, Routes } from "react-router-dom";
import Configuration from "./pages/Configuration/configuration";
import History from "./pages/History/history";
import Home from "../CustomerDashboard/pages/Home/home";
import Request from "./pages/Request/request";
import Sidebar from "./Sidebar/sidebar";

const CustomerDashboard = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="request" element={<Request />} />
        <Route path="history" element={<History />} />
        <Route path="configuration" element={<Configuration />} />
      </Routes>
    </>
  );
};

export default CustomerDashboard;
