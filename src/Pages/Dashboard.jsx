import React, { Component } from "react";
import Box from "@mui/joy/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import Typography from "@mui/material/Typography";
import { width } from "@mui/system";
import Card from "@mui/joy/Card";
import Grid from "@mui/joy/Grid";
import Item from "@mui/joy/Grid";

const data1 = [
  { label: "Robot A", value: 400 },
  { label: "Robot B", value: 300 },
  { label: "Robot C", value: 200 },
  { label: "Robot D", value: 100 },
];
const data2 = [
  { label: "Group 1", value: 500 },
  { label: "Group 2", value: 300 },
  { label: "Group 3", value: 100 },
  { label: "Group 4", value: 800 },
];

const years = [
  new Date(2022, 1, 1),
  new Date(2022, 2, 1),
  new Date(2022, 3, 1),
  new Date(2022, 4, 1),
  new Date(2022, 5, 1),
  new Date(2022, 6, 1),
  new Date(2022, 7, 1),
  new Date(2022, 8, 1),
  new Date(2022, 9, 1),
  new Date(2022, 10, 1),
  new Date(2022, 11, 1),
  new Date(2022, 12, 1),
  new Date(2023, 1, 1),
  new Date(2023, 2, 1),
  new Date(2023, 3, 1),
  new Date(2023, 4, 1),
  new Date(2023, 5, 1),
  new Date(2023, 6, 1),
  new Date(2023, 7, 1),
  new Date(2023, 8, 1),
  new Date(2023, 9, 1),
  new Date(2023, 10, 1),
  new Date(2023, 11, 1),
  new Date(2023, 12, 1),
];
// const data2 = [];

const Dashboard = () => {
  const [radius, setRadius] = React.useState(50);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);
  console.log("I am here");
  return (
    <>
      <Box sx={{ width: "100%", paddingTop: "20px" }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, margin: "10px" }}>
          <Grid xs={6} md={6}>
            <Item>
              {" "}
              <Card
                color="warning"
                invertedColors
                orientation="vertical"
                size="md"
                variant="soft"
              >
                <PieChart
                  height={200}
                  series={[{ data: data1, outerRadius: radius }]}
                  skipAnimation={skipAnimation}
                />
              </Card>
            </Item>
          </Grid>
          <Grid xs={6} md={6}>
            <Item>
              {" "}
              <Card
                color="success"
                invertedColors
                orientation="vertical"
                size="md"
                variant="soft"
              >
                <PieChart
                  height={200}
                  series={[{ data: data2, outerRadius: radius }]}
                  skipAnimation={skipAnimation}
                />
              </Card>
            </Item>
          </Grid>
          <Grid xs={12} md={12}>
            <Item>
              <Card
                color="danger"
                invertedColors
                orientation="vertical"
                size="md"
                variant="soft"
              >
                <LineChart
                  xAxis={[
                    {
                      id: "Years",
                      data: years,
                      scaleType: "time",
                      valueFormatter: (date) => `${date.getFullYear().toString()}/${date.getMonth().toString()}` ,
                    },
                  ]}
                  series={[
                    {
                      label: "Sent Emails",

                      data: [2, 5.5, 2, 8.5, 1.5, 5,2, 5.5, 2, 8.5, 1.5, 5,2, 5.5, 2, 8.5, 1.5, 5,2, 5.5, 2, 8.5, 1.5, 5],
                    },
                    {
                      label: "Received Emails",

                      data: [12, 15.5, 7, 3, 1, 8,12, 15.5, 7, 3, 1, 8,12, 15.5, 7, 3, 1, 8,12, 15.5, 7, 3, 1, 8],
                    },
                  ]}
   
                  height={300}
                />
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
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
