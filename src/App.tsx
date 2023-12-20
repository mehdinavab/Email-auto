import Box from "@mui/joy/Box";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/SideBar";

import Dashboard from "./Pages/Dashboard";
import Emails from "./Pages/Emails";
import Groups from "./Pages/Groups";
import Robots from "./Pages/Robots";

function App() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", gap: 1 }}>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/robots" element={<Robots />} />
        <Route path="/not-found" element={<div>Not Found Page</div>} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </Routes>
    </Box>
  );
}

export default App;
