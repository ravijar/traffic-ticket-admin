import React, { Fragment, useEffect, useState } from "react";
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
  MenuItem,
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

import dayjs from "dayjs";

import axios from "axios";
import { policeStation } from "../data/DummyData";
import CustomizableAlert from "../components/CustomizableAlert";

function transformData(inputData) {
  const transformedData = [];

  // Group data by location
  const groupedData = {};
  inputData.forEach((item) => {
    if (!groupedData[item.location]) {
      groupedData[item.location] = {
        location: item.location,
        dayShift: 0,
        nightShift: 0,
        officers: [],
      };
    }
    // Count shifts
    if (item.shift === "day") {
      groupedData[item.location].dayShift++;
    } else if (item.shift === "night") {
      groupedData[item.location].nightShift++;
    }
    // Add officers
    groupedData[item.location].officers.push({
      name: item.full_name,
      officerId: item.officer_id,
      dayShift: item.shift === "day" ? true : false,
      telephone: item.telephone,
    });
  });

  // Convert the grouped data object into an array
  for (const location in groupedData) {
    transformedData.push(groupedData[location]);
  }

  return transformedData;
}

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
  const [date, setDate] = useState(dayjs(new Date()));
  const [data, setData] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [locations, setLocations] = useState([]);

  // input errors
  const [officerIdError, setOfficerIdError] = useState(false);
  const [locationError, setLocationError] = useState(false);

  // alert
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");

  const openAlert = () => {
    setOpen(true);
  };

  const closeAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/schedules/get_scheduled_officers/", {
        params: { date: date.format("YYYY-MM-DD") },
      })

      .then((res) => {
        setData(transformData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        "http://localhost:8000/api/officerlocations/get_police_station_locations/",
        {
          params: { police_station: policeStation },
        }
      )
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date, submit]);

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
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/schedules/create_schedule/", {
            officer_id: officerId,
            location: location,
            shift: shift,
            date: `${date.format("YYYY-MM-DD")}`,
          })

          .then(() => {
            setSubmit(true);
            setSeverity("success");
            setMessage("Schedule created!");
            openAlert();
            setLocation("");
            setOfficerId("");
            resolve();
          })
          .catch((error) => {
            setSeverity("error");
            setMessage("Schedule creation failed!");
            openAlert();
          });
        setSubmit(false);
      });
    }
  };

  return (
    <Container>
      <CustomizableAlert open={open} handleClose={closeAlert} severity={severity} message={message}/>
      <Grid container spacing={6}>
        {/* create schedule */}
        <Grid item xs={12} md={5}>
          <Card>
            <Container>
              <CardHeader title="Create Schedule" />
              <CardContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{ marginBottom: 3 }}
                  >
                    <DatePicker
                      label="Date*"
                      sx={{ flexGrow: 1 }}
                      onChange={setDate}
                      value={date}
                    />
                  </DemoContainer>
                </LocalizationProvider>
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
                    value={officerId}
                  />

                  <TextField
                    sx={{ marginBottom: 3 }}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setLocationError(false);
                    }}
                    id="location-select"
                    label="Location"
                    variant="outlined"
                    fullWidth
                    required
                    select
                    error={locationError}
                    value={location}
                    defaultValue=""
                  >
                    {locations.map((datum) => (
                      <MenuItem key={datum.location} value={datum.location}>
                        {datum.location}
                      </MenuItem>
                    ))}
                  </TextField>

                  <FormControl sx={{ marginBottom: 4 }}>
                    <FormLabel>Select Shift</FormLabel>
                    <Container>
                      <RadioGroup
                        row
                        value={shift}
                        onChange={(e) => setShift(e.target.value)}
                      >
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

        {/* schedules table */}
        <Grid item xs={12} md={7}>
          <Card>
            <Container>
              <CardHeader title="Schedules" />
              <CardContent>
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
      </Grid>
    </Container>
  );
};

export default Schedule;
