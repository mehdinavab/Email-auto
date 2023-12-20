import React, { Component } from "react";
import Box from "@mui/joy/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import Typography from "@mui/material/Typography";
import { width } from "@mui/system";

const data1 = [
  { label: "Robot A", value: 400 },
  { label: "Robot B", value: 300 },
  { label: "Robot C", value: 200 },
  { label: "Robot D", value: 100 },
];
const data2 = [];

const Dashboard = () => {
  console.log("I am here");
  return (
    <>
      <p>Hellooooo</p>
      <div sx={{ display: "block", minHeight: "100vh", minWidth: "85%" }}>
        <p>Hellooooo</p>
      </div>
      <p>Hellooooo</p>
      <p>Hellooooo</p>
    </>
  );
};

export default Dashboard;
{
  /* <Box sx={{ width: "100%" }}>
<PieChart
  height={500}
  series={[{ data: data1, outerRadius: radius }]}
  skipAnimation={skipAnimation}
/>
</Box> */
}
// console.log("I am here!!!2");
// const [radius, setRadius] = React.useState(50);
// const [itemNb, setItemNb] = React.useState(5);
// const [skipAnimation, setSkipAnimation] = React.useState(false);
