import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import CustomerDashboard from "./pages/CustomerDashboard/CustomerDashboard";
import WorkerDashboard from "./pages/WorkerDashboard/WorkerDashboard";
import MainHome from "./pages/LandingPage/mainHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/admin-dashboard/*" element={<Dashboard />} />
        <Route path="/customer-dashboard/*" element={<CustomerDashboard />} />
        <Route path="/worker-dashboard/*" element={<WorkerDashboard />} />
      </Routes>
    </>
  );
}

export default App;
