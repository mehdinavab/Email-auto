import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom'
import "./index.css";
import App from "./App";
import Login from "./Pages/Login";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./Components/SideBar";
import Emails from "./Pages/Emails";
import Dashboard from "./Pages/Dashboard";
import Groups from "./Pages/Groups";
import Robots from "./Pages/Robots";
import Box from '@mui/joy/Box';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Link
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/emails",
    Component: Emails,
  },
  {
    path: "/groups",
    Component: Groups,
  },
  {
    path: "/robots",
    Component: Robots,
  },
  // {
  //   path: "/",
  //   Component: Dashboard,
  // },
]);
root.render(
  <React.StrictMode>
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <Sidebar />
      <RouterProvider router={router} />
    </Box>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/* <  <App />> */
