import React, { useContext, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
  Divider,
  Chip,
  Button,
} from "@mui/material";
import axios from "axios";
import CustomizableAlert from "../components/CustomizableAlert";
import AuthContext from "../context/AuthContext";
import { API_URL } from "../constants/urls";

const Register = () => {
  const user = useContext(AuthContext);

  // register officer
  // text field values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [telephone, setTelephone] = useState("");
  const [officerId, setOfficerId] = useState("");
  const [station, setStation] = useState(user.user.police_station);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // text field errors
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [nicError, setNicError] = useState(false);
  const [telephoneError, setTelephoneError] = useState(false);
  const [officerIdError, setOfficerIdError] = useState(false);
  const [stationError, setStationError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  // register officer location
  // text field values
  const [officerPoliceStation, setOfficerPoliceStation] =
    useState(user.user.police_station);
  const [officerLocation, setOfficerLocation] = useState("");

  // text field errors
  const [officerPoliceStationError, setOfficerPoliceStationError] =
    useState(false);
  const [officerLocationError, setOfficerLocationError] = useState(false);

  // register camera location
  // text field values
  const [cameraPoliceStation, setCameraPoliceStation] = useState(user.user.police_station);
  const [cameraLocation, setCameraLocation] = useState("");

  // text field errors
  const [cameraPoliceStationError, setCameraPoliceStationError] =
    useState(false);
  const [cameraLocationError, setCameraLocationError] = useState(false);

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

  const handleOfficerRegister = (e) => {
    e.preventDefault();

    // checking for empty text fields
    if (firstName === "") {
      setFirstNameError(true);
    }
    if (lastName === "") {
      setLastNameError(true);
    }
    if (nic === "") {
      setNicError(true);
    }
    if (telephone === "") {
      setTelephoneError(true);
    }
    if (officerId === "") {
      setOfficerIdError(true);
    }
    if (station === "") {
      setStationError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (confirmPassword === "") {
      setConfirmPasswordError(true);
    }

    // submit action
    if (
      firstName &&
      lastName &&
      nic &&
      telephone &&
      officerId &&
      station &&
      password &&
      confirmPassword
    ) {
      if (password === confirmPassword) {
        return new Promise((resolve, reject) => {
          axios
            .post(`${API_URL}/api/users/officer_signup/`, {
              first_name: firstName,
              last_name: lastName,
              nic: nic,
              telephone: telephone,
              police_station: station,
              password: password,
              officer_id: officerId,
            })

            .then(() => {
              setSeverity("success");
              setMessage("Officer Registered!");
              openAlert();
              setFirstName("");
              setLastName("");
              setNic("");
              setTelephone("");
              setOfficerId("");
              setPassword("");
              setConfirmPassword("");
            })
            .catch((error) => {
              setSeverity("error");
              setMessage("Officer Registration Failed!");
              openAlert();
            });
        });
      } else {
        setSeverity("warning");
        setMessage("Passwords Do Not Match!");
        openAlert();
      }
    }
  };

  const handleOfficerLocationRegister = (e) => {
    e.preventDefault();

    // checking for empty text fields
    if (officerPoliceStation === "") {
      setOfficerPoliceStationError(true);
    }
    if (officerLocation === "") {
      setOfficerLocationError(true);
    }

    // submit action
    if (officerPoliceStation && officerLocation) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${API_URL}/api/officerlocations/`, {
            police_station: officerPoliceStation,
            location: officerLocation,
          })
          .then(() => {
            setSeverity("success");
            setMessage("Location Registered!");
            openAlert();
            setOfficerLocation("");
          })
          .catch((error) => {
            setSeverity("error");
            setMessage("Location Registration Failed!");
            openAlert();
          });
      });
    }
  };

  const handleCameraLocationRegister = (e) => {
    e.preventDefault();

    // checking for empty text fields
    if (cameraPoliceStation === "") {
      setCameraPoliceStationError(true);
    }
    if (cameraLocation === "") {
      setCameraLocationError(true);
    }

    // submit action
    if (cameraPoliceStation && cameraLocation) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${API_URL}/api/camerlocations/`, {
            police_station: cameraPoliceStation,
            location: cameraLocation,
          })
          .then(() => {
            setSeverity("success");
            setMessage("Location Registered!");
            openAlert();
            setCameraLocation("");
          })
          .catch((error) => {
            setSeverity("error");
            setMessage("Location Registration Failed!");
            openAlert();
          });
      });
    }
  };

  return (
    <Container>
      <CustomizableAlert
        open={open}
        handleClose={closeAlert}
        severity={severity}
        message={message}
      />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          {/* officer register */}
          <Card>
            <Container>
              <CardHeader title="REGISTER OFFICER" />
              <CardContent>
                <form
                  onSubmit={handleOfficerRegister}
                  noValidate
                  autoComplete="off"
                >
                  {/* personal details */}
                  <Divider sx={{ marginBottom: 2 }}>
                    <Chip label="Personal Details" size="small" />
                  </Divider>
                  <Box sx={{ display: "flex" }}>
                    <TextField
                      sx={{ marginBottom: 2, marginRight: 1 }}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        setFirstNameError(false);
                      }}
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                      error={firstNameError}
                      value={firstName}
                      size="small"
                    />
                    <TextField
                      sx={{ marginBottom: 2, marginLeft: 1 }}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        setLastNameError(false);
                      }}
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                      error={lastNameError}
                      value={lastName}
                      size="small"
                    />
                  </Box>
                  <TextField
                    sx={{ marginBottom: 2 }}
                    onChange={(e) => {
                      setNic(e.target.value);
                      setNicError(false);
                    }}
                    label="NIC"
                    variant="outlined"
                    fullWidth
                    required
                    error={nicError}
                    value={nic}
                    size="small"
                  />
                  <TextField
                    sx={{ marginBottom: 4, width: "50%" }}
                    onChange={(e) => {
                      setTelephone(e.target.value);
                      setTelephoneError(false);
                    }}
                    label="Telephone"
                    variant="outlined"
                    required
                    error={telephoneError}
                    value={telephone}
                    size="small"
                  />
                  {/* official details */}
                  <Divider sx={{ marginBottom: 2 }}>
                    <Chip label="Official Details" size="small" />
                  </Divider>
                  <Box sx={{ display: "flex" }}>
                    <TextField
                      sx={{ marginBottom: 2, marginRight: 1 }}
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
                      size="small"
                    />
                    <TextField
                      sx={{ marginBottom: 4, marginLeft: 1 }}
                      onChange={(e) => {
                        setStation(e.target.value);
                        setStationError(false);
                      }}
                      label="Police Station"
                      variant="outlined"
                      fullWidth
                      required
                      error={stationError}
                      value={station}
                      size="small"
                    />
                  </Box>
                  {/*credentials*/}
                  <Divider sx={{ marginBottom: 2 }}>
                    <Chip label="Credentials" size="small" />
                  </Divider>
                  <Box sx={{ display: "flex" }}>
                    <TextField
                      sx={{ marginBottom: 2, marginRight: 1 }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                      }}
                      label="Password"
                      variant="outlined"
                      fullWidth
                      required
                      error={passwordError}
                      value={password}
                      size="small"
                    />
                    <TextField
                      sx={{ marginBottom: 4, marginLeft: 1 }}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setConfirmPasswordError(false);
                      }}
                      label="Confirm Password"
                      variant="outlined"
                      fullWidth
                      required
                      error={confirmPasswordError}
                      value={confirmPassword}
                      size="small"
                    />
                  </Box>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    size="small"
                    sx={{ marginBottom: 2, padding: 1 }}
                  >
                    Register Officer
                  </Button>
                </form>
              </CardContent>
            </Container>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* location register */}
          <Card>
            <Container>
              <CardHeader title="REGISTER LOCATION" />
              <CardContent>
                {/* officer location details */}
                <form
                  onSubmit={handleOfficerLocationRegister}
                  noValidate
                  autoComplete="off"
                >
                  <Divider sx={{ marginBottom: 2 }}>
                    <Chip label="Officer Location" size="small" />
                  </Divider>
                  <Box sx={{ display: "flex" }}>
                    <TextField
                      sx={{ marginBottom: 2, marginRight: 1 }}
                      onChange={(e) => {
                        setOfficerPoliceStation(e.target.value);
                        setOfficerPoliceStationError(false);
                      }}
                      label="Police Station"
                      variant="outlined"
                      fullWidth
                      required
                      error={officerPoliceStationError}
                      value={officerPoliceStation}
                      size="small"
                    />
                    <TextField
                      sx={{ marginBottom: 4, marginLeft: 1 }}
                      onChange={(e) => {
                        setOfficerLocation(e.target.value);
                        setOfficerLocationError(false);
                      }}
                      label="Location"
                      variant="outlined"
                      fullWidth
                      required
                      error={officerLocationError}
                      value={officerLocation}
                      size="small"
                    />
                  </Box>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    size="small"
                    sx={{ marginBottom: 4, padding: 1 }}
                  >
                    Register Officer location
                  </Button>
                </form>
                {/* camera location details */}
                <form
                  onSubmit={handleCameraLocationRegister}
                  noValidate
                  autoComplete="off"
                >
                  <Divider sx={{ marginBottom: 2 }}>
                    <Chip label="Camera Location" size="small" />
                  </Divider>
                  <Box sx={{ display: "flex" }}>
                    <TextField
                      sx={{ marginBottom: 2, marginRight: 1 }}
                      onChange={(e) => {
                        setCameraPoliceStation(e.target.value);
                        setCameraPoliceStationError(false);
                      }}
                      label="Police Station"
                      variant="outlined"
                      fullWidth
                      required
                      error={cameraPoliceStationError}
                      value={cameraPoliceStation}
                      size="small"
                    />
                    <TextField
                      sx={{ marginBottom: 4, marginLeft: 1 }}
                      onChange={(e) => {
                        setCameraLocation(e.target.value);
                        setCameraLocationError(false);
                      }}
                      label="Location"
                      variant="outlined"
                      fullWidth
                      required
                      error={cameraLocationError}
                      value={cameraLocation}
                      size="small"
                    />
                  </Box>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    size="small"
                    sx={{ marginBottom: 4, padding: 1 }}
                  >
                    Register camera location
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

export default Register;
