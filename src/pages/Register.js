import React, { useState } from "react";
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

const Register = () => {
  // text field values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [telephone, setTelephone] = useState("");
  const [officerId, setOfficerId] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // text field errors
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [nicError, setNicError] = useState(false);
  const [telephoneError, setTelephoneError] = useState(false);
  const [officerIdError, setOfficerIdError] = useState(false);
  const [policeStationError, setPoliceStationError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleSubmit = (e) => {
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
    if (policeStation === "") {
      setPoliceStationError(true);
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
      policeStation &&
      password &&
      confirmPassword
    ) {
      console.log(
        firstName,
        lastName,
        nic,
        telephone,
        officerId,
        policeStation,
        password,
        confirmPassword
      );
      if (password === confirmPassword) {
        return new Promise((resolve, reject) => {
          axios
            .post("http://localhost:8000/api/users/officer_signup/", {
              first_name: firstName,
              last_name: lastName,
              nic: nic,
              telephone: telephone,
              police_station: policeStation,
              password: password,
              officer_id: officerId,
            })

            .then(() => {
              alert("Officer successfully registered!");
              setFirstName("");
              setLastName("");
              setNic("");
              setTelephone("");
              setOfficerId("");
              setPoliceStation("");
              setPassword("");
              setConfirmPassword("");
            })
            .catch((error) => {
              alert("Officer registration failed!");
              reject(error);
            });
        });
      } else {
        alert("Passwords do not match!");
      }
    }
  };

  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          {/* officer details */}
          <Card>
            <Container>
              <CardHeader title="REGISTER OFFICER" />
              <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
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
                        setPoliceStation(e.target.value);
                        setPoliceStationError(false);
                      }}
                      label="Police Station"
                      variant="outlined"
                      fullWidth
                      required
                      error={policeStationError}
                      value={policeStation}
                      size="small"
                    />
                  </Box>
                  {/*credentials*/}
                  <Divider sx={{ marginBottom: 2 }}>
                    <Chip label="Credentials" size="small" />
                  </Divider>
                  <Box sx={{ display: "flex" }}>
                    <TextField
                      sx={{ marginBottom: 2 , marginRight: 1 }}
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
                      sx={{ marginBottom: 4 , marginLeft: 1 }}
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
                      sx={{ marginBottom: 2 ,padding:1}}
                    >
                      Register Officer
                    </Button>
                </form>
              </CardContent>
            </Container>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Container>
              {/* credentials */}
              <CardHeader title="Credentials" />
              <CardContent>
                <form>
                  <TextField
                    sx={{ marginBottom: 3 }}
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
                    sx={{ marginBottom: 4 }}
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
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    size="small"
                    sx={{ marginBottom: 4 }}
                  >
                    Register Officer
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
