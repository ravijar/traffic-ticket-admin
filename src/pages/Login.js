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
import React from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const theme = useTheme();

  return (
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
            <TextField
              label="User ID"
              fullWidth
              variant="outlined"
              sx={{ m: 1 }}
              size="small"
            />
            <FormControl
              variant="outlined"
              fullWidth
              sx={{ m: 1 }}
              size="small"
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
              />
            </FormControl>
            <Button fullWidth variant="contained" sx={{ m: 1 }}>
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
