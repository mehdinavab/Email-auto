import * as React from "react";
import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Robots = () => {
  <Box sx={{ display: "block", minHeight: "100vh", minWidth: "85%" }}>
    <Card style={{ margin: "10px" }} variant="outlined">
      <Stack direction="row" spacing={2} alignItems="center">
        <FormControl>
          <TextField
            required
            id="email"
            label="E-mail-Address"
            defaultValue=""
            placeholder="Email Address"
            helperText="Please enter email address"
          />
        </FormControl>
        <FormControl>
          <Select
            labelId="emailType-label"
            id="emailType"
            value={emailType}
            label="Email Type"
            onChange={handleChange2}
          >
            <MenuItem value={""}>Please Select</MenuItem>
            <MenuItem value={"Azure"}>Azure</MenuItem>
            <MenuItem value={"FinitX"}>FinitX</MenuItem>
            <MenuItem value={"Gmail"}>Gmail</MenuItem>
          </Select>
          <FormHelperText>Please select e-mail type</FormHelperText>
          <InputLabel id="emailType-label">E-mail type</InputLabel>
        </FormControl>
      </Stack>
      <Stack alignItems="end">
        <FormControl fullWidth={false}>
          <Button variant="contained" size="large" color="success">
            Add Robot
          </Button>
        </FormControl>
        <FormControl></FormControl>
        <FormControl></FormControl>
      </Stack>
    </Card>

    <Card style={{ margin: "10px" }} variant="outlined">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Robot Name</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  </Box>;
};

export default Robots;
