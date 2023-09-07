import { useParams } from "react-router-dom";
import { reviewDetails } from "../data/DummyData";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
} from "@mui/material";

const ReviewItem = () => {
  const params = useParams();
  const { violationId } = params;

  // card data
  const headerBgColor = "#616161";
  const bodyBgColor = "#D2D2D2";
  const titleSize = "h6";
  const titleColor = "white";
  const subHeaderSize = "p";
  const subHeaderColor = "white";

  return (
    <Container sx={{ bgcolor: bodyBgColor }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            {/* vehicle image */}
            <Card sx={{ marginBottom: 3 }}>
              <CardHeader
                title="Vehicle Image"
                sx={{ textAlign: "center", bgcolor: headerBgColor }}
                titleTypographyProps={{ color: titleColor, variant: titleSize }}
                subheaderTypographyProps={{
                  color: subHeaderColor,
                  variant: subHeaderSize,
                }}
              />
              <CardContent>
                <img
                  src={reviewDetails[violationId - 1].vehicleImage}
                  width="100%"
                />
              </CardContent>
            </Card>

            {/* license plate image */}
            <Card sx={{ marginBottom: 3 }}>
              <CardHeader
                title="License Plate Image"
                sx={{ textAlign: "center", bgcolor: headerBgColor }}
                titleTypographyProps={{ color: titleColor, variant: titleSize }}
                subheaderTypographyProps={{
                  color: subHeaderColor,
                  variant: subHeaderSize,
                }}
              />
              <CardContent>
                <img
                  src={reviewDetails[violationId - 1].licensePlateImage}
                  width="100%"
                />
                <TextField
                  label="Detected License Plate"
                  variant="outlined"
                  value={reviewDetails[violationId - 1].vehicleNo}
                  fullWidth
                  sx={{ marginTop: 3, marginBottom: 3 }}
                />
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: "100%" }}
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            {/* original image */}
            <Card sx={{ marginBottom: 3 }}>
              <CardHeader
                title="Original Image"
                sx={{ textAlign: "center", bgcolor: headerBgColor }}
                titleTypographyProps={{ color: titleColor, variant: titleSize }}
                subheaderTypographyProps={{
                  color: subHeaderColor,
                  variant: subHeaderSize,
                }}
              />
              <CardContent>
                <img
                  src={reviewDetails[violationId - 1].originalImage}
                  width="100%"
                />
              </CardContent>
            </Card>
            <Box sx={{ display: "flex", marginBottom: 3 }}>
              <Button
                variant="contained"
                sx={{ flexGrow: 1, marginRight: 2, marginLeft: 2 }}
                color="error"
              >
                Decline
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ flexGrow: 1, marginRight: 2, marginLeft: 2 }}
              >
                Accept
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReviewItem;
