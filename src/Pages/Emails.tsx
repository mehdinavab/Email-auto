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

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  margin: "25px",
  padding: "25px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function createData(name: string, email_address: string, email_type: string) {
  return { name, email_address, email_type };
}

const rows = [
  createData("Mr X Emails", "ehreee@x.com", "Azure"),
  createData("Mr Xs Emails", "ehsdfdsfreee@x.com", "Azure"),
  createData("Mr Xc Emails", "ehreesdfsde@x.com", "Azure"),
  createData("Mr Xv Emails", "ehsfsdfreee@x.com", "Azure"),
  createData("Mr Y Emails", "ehreefsdfsde@T.com", "Azure"),
  createData("Mr Y Emails", "ehrsdfsdfsdeee@T.com", "Azure"),
  createData("Mr Y Emails", "ehreeessdfsf@T.com", "Azure"),
  createData("XYZ Emails", "erwerwedfssr@xyz.com", "Microsoft"),
  createData("XYZ Emails", "erwdfsdferwer@xyz.com", "Microsoft"),
  createData("XYZ Emails", "erwesfdsdfrwer@xyz.com", "Microsoft"),
  createData("XYZ Emails", "erwerwsdfsder@xyz.com", "Microsoft"),
];

const Emails = () => {
  const [emailType, setAge] = React.useState("");
  // let emailType = "";
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const handleChange2 = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);

    // emailType = event.target.value
  };
  return (
    <>
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
                Add E-mail
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
                  <TableCell>Email Name</TableCell>
                  <TableCell align="right">Email Address</TableCell>
                  <TableCell align="right">Email Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email_address}</TableCell>
                    <TableCell align="right">{row.email_type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </>
  );
};

export default Emails;
