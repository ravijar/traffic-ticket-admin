import React, { Fragment, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

// table colors
const mainHeader = "#424242";
const mainRow = "#EEEEEE";
const subHeader = "#616161";
const subTitle = "#9E9E9E";
const subRow = "#F5F5F5";

// collapsible row component
const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const dayShiftOfficers = row.officers.filter((officer) => officer.dayShift);
  const nightShiftOfficers = row.officers.filter(
    (officer) => !officer.dayShift
  );

  return (
    <Fragment>
      {/* main table row */}
      <TableRow sx={{ "& > *": { borderBottom: "unset" }, bgcolor: mainRow }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.location}</TableCell>
        <TableCell align="center">{row.dayShift}</TableCell>
        <TableCell align="center">{row.nightShift}</TableCell>
      </TableRow>

      {/* sub table */}
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 0, padding: 1, bgcolor: mainRow }}>
              <Table size="small">
                <TableHead sx={{ bgcolor: subHeader }}>
                  <TableRow>
                    <TableCell align="center" sx={{ color: "white" }}>
                      Officer ID
                    </TableCell>
                    <TableCell align="center" sx={{ color: "white" }}>
                      Name
                    </TableCell>
                    <TableCell align="center" sx={{ color: "white" }}>
                      Telephone
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* day shift officers */}
                  <TableRow sx={{ bgcolor: subTitle }}>
                    <TableCell align="center" colSpan={3}>
                      Day Shift
                    </TableCell>
                  </TableRow>
                  {dayShiftOfficers.length === 0 ? (
                    <TableRow>
                      <TableCell
                        align="center"
                        colSpan={3}
                        sx={{ bgcolor: subRow }}
                      >
                        No Schedules!
                      </TableCell>
                    </TableRow>
                  ) : (
                    dayShiftOfficers.map((officer) => (
                      <TableRow
                        key={officer.officerId}
                        sx={{ bgcolor: subRow }}
                      >
                        <TableCell align="center">
                          {officer.officerId}
                        </TableCell>
                        <TableCell align="center">{officer.name}</TableCell>
                        <TableCell align="center">
                          {officer.telephone}
                        </TableCell>
                      </TableRow>
                    ))
                  )}

                  {/* night shift officers */}
                  <TableRow sx={{ bgcolor: subTitle }}>
                    <TableCell align="center" colSpan={3}>
                      Night Shift
                    </TableCell>
                  </TableRow>
                  {nightShiftOfficers.length === 0 ? (
                    <TableRow>
                      <TableCell
                        align="center"
                        colSpan={3}
                        sx={{ bgcolor: subRow }}
                      >
                        No Schedules!
                      </TableCell>
                    </TableRow>
                  ) : (
                    nightShiftOfficers.map((officer) => (
                      <TableRow
                        key={officer.officerId}
                        sx={{ bgcolor: subRow }}
                      >
                        <TableCell align="center">
                          {officer.officerId}
                        </TableCell>
                        <TableCell align="center">{officer.name}</TableCell>
                        <TableCell align="center">
                          {officer.telephone}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

const Schedule = () => {
  // input values
  const [officerId, setOfficerId] = useState("");
  const [location, setLocation] = useState("");
  const [shift, setShift] = useState("day");

  // input errors
  const [officerIdError, setOfficerIdError] = useState(false);
  const [locationError, setLocationError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // checking for empty textfields
    if (officerId === "") {
      setOfficerIdError(true);
    }
    if (location === "") {
      setLocationError(true);
    }

    // submit action
    if (officerId && location) {
      console.log(officerId, location, shift);
    }
  };

  // dummy data
  const data = [
    {
      location: "Rawathawatta",
      dayShift: 2,
      nightShift: 1,
      officers: [
        {
          officerId: "SLP-12345",
          name: "Gunapala",
          dayShift: true,
          telephone: "0716843954",
        },
        {
          officerId: "SLP-29673",
          name: "Siripala",
          dayShift: true,
          telephone: "0746849521",
        },
        {
          officerId: "SLP-78621",
          name: "Amal",
          dayShift: false,
          telephone: "0729846751",
        },
      ],
    },
    {
      location: "Molpe Rd",
      dayShift: 3,
      nightShift: 2,
      officers: [
        {
          officerId: "SLP-12345",
          name: "Gunapala",
          dayShift: false,
          telephone: "0716843954",
        },
        {
          officerId: "SLP-29673",
          name: "Siripala",
          dayShift: false,
          telephone: "0746849521",
        },
        {
          officerId: "SLP-78621",
          name: "Amal",
          dayShift: true,
          telephone: "0729846751",
        },
        {
          officerId: "SLP-75126",
          name: "Kamal",
          dayShift: true,
          telephone: "0789645214",
        },
        {
          officerId: "SLP-45621",
          name: "Silva",
          dayShift: true,
          telephone: "0718956423",
        },
      ],
    },
    {
      location: "Mendis Ln",
      dayShift: 1,
      nightShift: 1,
      officers: [
        {
          officerId: "SLP-75126",
          name: "Kamal",
          dayShift: true,
          telephone: "0789645214",
        },
        {
          officerId: "SLP-45621",
          name: "Silva",
          dayShift: false,
          telephone: "0718956423",
        },
      ],
    },
    {
      location: "Seevali Rd",
      dayShift: 1,
      nightShift: 0,
      officers: [
        {
          officerId: "SLP-45621",
          name: "Silva",
          dayShift: true,
          telephone: "0718956423",
        },
      ],
    },
    {
      location: "Ariyawansa Rd",
      dayShift: 0,
      nightShift: 1,
      officers: [
        {
          officerId: "SLP-75126",
          name: "Kamal",
          dayShift: false,
          telephone: "0789645214",
        },
      ],
    },
    {
      location: "Katubedda",
      dayShift: 0,
      nightShift: 0,
      officers: [],
    },
  ];

  return (
    <Container>
      <Grid container spacing={6}>
        {/* schedules table */}
        <Grid item xs={12} md={7}>
          <Card>
            <Container>
              <CardHeader title="Schedules" />
              <CardContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{ marginBottom: 3 }}
                  >
                    <DatePicker label="Choose Date" sx={{ flexGrow: 1 }} />
                  </DemoContainer>
                </LocalizationProvider>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: mainHeader }}>
                        <TableCell />
                        <TableCell align="center" sx={{ color: "white" }}>
                          Location
                        </TableCell>
                        <TableCell align="center" sx={{ color: "white" }}>
                          Day Shift
                        </TableCell>
                        <TableCell align="center" sx={{ color: "white" }}>
                          Night Shift
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row) => (
                        <Row key={row.location} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Container>
          </Card>
        </Grid>

        {/* create schedule */}
        <Grid item xs={12} md={5}>
          <Card>
            <Container>
              <CardHeader title="Create Schedule" />
              <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                  <TextField
                    sx={{ marginBottom: 3 }}
                    onChange={(e) => {
                      setOfficerId(e.target.value);
                      setOfficerIdError(false);
                    }}
                    label="Officer ID"
                    variant="outlined"
                    fullWidth
                    required
                    error={officerIdError}
                  />
                  <TextField
                    sx={{ marginBottom: 3 }}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setLocationError(false);
                    }}
                    label="Location"
                    variant="outlined"
                    fullWidth
                    required
                    error={locationError}
                  />
                  <FormControl sx={{ marginBottom: 4 }}>
                    <FormLabel>Select Shift</FormLabel>
                    <Container>
                      <RadioGroup row value={shift} onChange={(e)=> setShift(e.target.value)}>
                        <FormControlLabel
                          value="day"
                          control={<Radio />}
                          label="Day"
                        />
                        <FormControlLabel
                          value="night"
                          control={<Radio />}
                          label="Night"
                        />
                      </RadioGroup>
                    </Container>
                  </FormControl>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    size="large"
                    sx={{ marginBottom: 4 }}
                  >
                    Assign Officer
                  </Button>
                </form>
              </CardContent>
            </Container>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Schedule;
