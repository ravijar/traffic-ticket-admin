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
import React from "react";

const Register = () => {
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          {/* officer details */}
          <Card>
            <Container>
              <CardHeader title="Officer Details" />
              <CardContent>
                <form>
                  {/* personal details */}
                  <Divider sx={{ marginBottom: 4 }}>
                    <Chip label="Personal Details" />
                  </Divider>
                  <Box sx={{ display: "flex" }}>
                    <TextField
                      sx={{ marginBottom: 3, marginRight: 1 }}
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <TextField
                      sx={{ marginBottom: 3, marginLeft: 1 }}
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Box>
                  <TextField
                    sx={{ marginBottom: 3 }}
                    label="NIC"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    sx={{ marginBottom: 4, width: "50%" }}
                    label="Telephone"
                    variant="outlined"
                    required
                  />
                  {/* official details */}
                  <Divider sx={{ marginBottom: 4 }}>
                    <Chip label="Official Details" />
                  </Divider>
                  <Box sx={{ display: "flex" }}>
                    <TextField
                      sx={{ marginBottom: 4, marginRight: 1 }}
                      label="Officer ID"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <TextField
                      sx={{ marginBottom: 4, marginLeft: 1 }}
                      label="Police Station"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Box>
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
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    sx={{ marginBottom: 4 }}
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
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
