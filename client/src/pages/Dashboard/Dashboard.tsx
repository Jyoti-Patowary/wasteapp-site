import React from "react";
import { Route, Routes } from "react-router-dom";
import Assign from "./Pages/Assign";
import Configurations from "./Pages/Configurations";
import Customer from "./Pages/Customer";
import History from "./Pages/History";
import Order from "./Pages/Order";
import Overview from "./Pages/Overview";
import Worker from "./Pages/Worker";
import Sidebar from "./Sidebar/sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        {/* <Route path="" element={<div>Hello</div>} /> */}
        <Route path="" element={<Overview />} />
        <Route path="overview/customers" element={<Customer />} />
        <Route path="overview/workers" element={<Worker />} />
        <Route path="order" element={<Order />} />
        <Route path="assign" element={<Assign />} />
        <Route path="history" element={<History />} />
        <Route path="configurations" element={<Configurations />} />
      </Routes>
    </>
  );
};

export default Dashboard;
