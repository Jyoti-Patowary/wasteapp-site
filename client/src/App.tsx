import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/LandingPage/Home/home";
import Overview from "./pages/Dashboard/Pages/Overview";
import Dashboard from "./pages/Dashboard/Dashboard";
import CustomerDashboard from "./pages/CustomerDashboard/CustomerDashboard";
import WorkerDashboard from "./pages/WorkerDashboard/WorkerDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard/*" element={<Dashboard />} />
        <Route path="/customer-dashboard/*" element={<CustomerDashboard />} />
        <Route path="/worker-dashboard/*" element={<WorkerDashboard />} />
      </Routes>
    </>
  );
}

export default App;
