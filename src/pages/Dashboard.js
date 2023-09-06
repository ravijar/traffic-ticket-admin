import { PieChart } from "@mui/x-charts/PieChart";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LineChart } from "@mui/x-charts";
import dayjs from "dayjs";

import {
  vehicleCount,
  weeklyCount,
  monthlyCount,
  detectedViolations,
  reportedAccidents,
  policeStation,
  recentAccidents,
} from "../data/DummyData";

const Dashboard = () => {
  // card data
  const headerBgColor = "#616161";
  const bodyBgColor = "#D2D2D2";
  const titleSize = "h6";
  const titleColor = "white";
  const subHeaderSize = "p";
  const subHeaderColor = "white";

  const date = dayjs(new Date()).format("LL");

  // dummy data

  return (
    <Box>
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
            {/* vehicle count chart */}
            <Card sx={{ marginBottom: 2 }}>
              <CardHeader
                title="Vehicle Count"
                titleTypographyProps={{ color: titleColor, variant: titleSize }}
                subheader="(last 24 hours)"
                subheaderTypographyProps={{
                  color: subHeaderColor,
                  variant: subHeaderSize,
                }}
                sx={{ textAlign: "center", bgcolor: headerBgColor }}
              />
              <CardContent sx={{ bgcolor: bodyBgColor }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                  }}
                >
                  <PieChart
                    series={[
                      {
                        data: vehicleCount,
                        innerRadius: 50,
                        outerRadius: 100,
                        paddingAngle: 3,
                        cornerRadius: 5,
                        startAngle: 0,
                        endAngle: 360,
                        cx: 105,
                        cy: 105,
                      },
                    ]}
                    legend={{
                      direction: "column",
                      position: {
                        vertical: "middle",
                        horizontal: "right",
                      },
                    }}
                    sx={{
                      "--ChartsLegend-rootOffsetX": "-50px",
                      "--ChartsLegend-rootOffsetY": "-10px",
                    }}
                    width={400}
                    height={210}
                  />
                </Box>
              </CardContent>

              {/* violation detections count */}
            </Card>
            <Card sx={{ marginBottom: 2 }}>
              <CardHeader
                title="Violation Detections"
                titleTypographyProps={{ color: titleColor, variant: titleSize }}
                subheader={detectedViolations}
                subheaderTypographyProps={{
                  color: subHeaderColor,
                  variant: subHeaderSize,
                }}
                sx={{ textAlign: "center", bgcolor: headerBgColor }}
              />

              {/* reported accidents count */}
            </Card>
            <Card sx={{ marginBottom: 2 }}>
              <CardHeader
                title="Reported Accidents"
                titleTypographyProps={{ color: titleColor, variant: titleSize }}
                subheader={reportedAccidents}
                subheaderTypographyProps={{
                  color: subHeaderColor,
                  variant: subHeaderSize,
                }}
                sx={{ textAlign: "center", bgcolor: headerBgColor }}
              />
            </Card>
          </Box>
        </Grid>

        {/* accidents count graphs */}
        <Grid item xs={12} md={5}>
          <Card>
            <CardHeader
              title="Accidents Count"
              titleTypographyProps={{ color: titleColor, variant: titleSize }}
              subheaderTypographyProps={{
                color: subHeaderColor,
                variant: subHeaderSize,
              }}
              sx={{
                textAlign: "center",
                bgcolor: headerBgColor,
                color: "white",
              }}
            />
            <CardContent sx={{ bgcolor: bodyBgColor }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                <LineChart
                  height={250}
                  series={[{ data: weeklyCount, label: "Weekly" }]}
                  xAxis={[
                    {
                      scaleType: "point",
                      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    },
                  ]}
                />
                <LineChart
                  height={250}
                  series={[
                    { data: monthlyCount, label: "Monthly", color: "#4e79a7" },
                  ]}
                  xAxis={[
                    {
                      scaleType: "point",
                      data: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                    },
                  ]}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            {/* police station banner */}
            <Card sx={{ marginBottom: 2 }}>
              <CardHeader
                title={policeStation.toUpperCase()}
                titleTypographyProps={{ color: titleColor, variant: "h4" }}
                subheader={date}
                subheaderTypographyProps={{
                  color: subHeaderColor,
                  variant: "h7",
                }}
                sx={{
                  textAlign: "center",
                  bgcolor: headerBgColor,
                  color: "white",
                }}
              />
            </Card>

            <Card>
              <CardHeader
                title="Recent Accidents"
                titleTypographyProps={{ color: titleColor, variant: titleSize }}
                subheaderTypographyProps={{
                  color: subHeaderColor,
                  variant: subHeaderSize,
                }}
                sx={{ textAlign: "center", bgcolor: headerBgColor }}
              />
              <CardContent sx={{ bgcolor: bodyBgColor }}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: "#424242" }}>
                        <TableCell align="center" sx={{ color: "white" }}>
                          Location
                        </TableCell>
                        <TableCell align="center" sx={{ color: "white" }}>
                          Date
                        </TableCell>
                        <TableCell align="center" sx={{ color: "white" }}>
                          Time
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody sx={{ bgcolor: "#EEEEEE" }}>
                      {recentAccidents.map((accident) => (
                        <TableRow
                          key={accident.id}
                          sx={{ "& > *": { borderBottom: "unset" } }}
                        >
                          <TableCell align="center">
                            {accident.location}
                          </TableCell>
                          <TableCell align="center">{accident.date}</TableCell>
                          <TableCell align="center">{accident.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
