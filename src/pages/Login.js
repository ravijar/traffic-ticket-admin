import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext, useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // checking for empty textfields
    if (userName === "") {
      setUserNameError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (userName && password) {
      loginUser(userName, password);
    }
  };

  const { loginUser } = useContext(AuthContext);

  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "#f2f2f2",
        flexGrow: 1,
        height: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
        padding: (theme) => theme.spacing(2),
      }}
    >
      <Container
        maxWidth="sm"
        disableGutters
        sx={{
          bgcolor: "white",
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
          boxShadow: 5,
        }}
      >
        <Grid container spacing={0} marginTop="20vh">
          {/* logo panel */}
          <Grid item xs={3} md={5} justifyContent="center">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              minHeight="50vh"
              sx={{
                bgcolor: theme.palette.primary.main,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              }}
            >
              <img src="./logo.png" width="60%" alt="logo" />
            </Box>
          </Grid>

          {/* login form */}
          <Grid item xs={9} md={7} justifyContent="center">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              minHeight="50vh"
              paddingLeft={5}
              paddingRight={5}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  label="User ID"
                  fullWidth
                  variant="outlined"
                  sx={{ m: 1 }}
                  size="small"
                  onChange={(e) => {
                    setUserName(e.target.value);
                    setUserNameError(false);
                  }}
                  error={userNameError}
                />
                <FormControl
                  variant="outlined"
                  fullWidth
                  sx={{ m: 1 }}
                  size="small"
                  error={passwordError}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError(false);
                    }}
                  />
                </FormControl>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ m: 1 }}
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
