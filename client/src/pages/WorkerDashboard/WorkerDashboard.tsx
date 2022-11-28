import React from "react";
import { Route, Routes } from "react-router-dom";
import Configuration from "./pages/Configuration/configuration";
import History from "./pages/History/history";
import Home from "./pages/Home/home";
import RequestReceived from "./pages/RequestReceived/request";
import Sidebar from "./Sidebar/sidebar";

const WorkerDashboard = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="request-received" element={<RequestReceived />} />
        <Route path="history" element={<History />} />
        <Route path="configuration" element={<Configuration />} />
      </Routes>
    </>
  );
};

export default WorkerDashboard;
