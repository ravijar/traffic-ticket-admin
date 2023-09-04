import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import { LineChart } from "@mui/x-charts";

const Dashboard = () => {
  // card data
  const headerBgColor = "#616161";
  const bodyBgColor = "#D2D2D2";
  const titleSize = "h6";
  const titleColor = "white";
  const subHeaderSize = "p";
  const subHeaderColor = "white";

  // dummy data
  const vehicleCount = [
    { label: "Molpe Rd", value: 105 },
    { label: "Mendis Ln", value: 55 },
    { label: "Seevali Rd", value: 127 },
    { label: "Katubedda", value: 178 },
    { label: "Rawathawatta", value: 75 },
    { label: "Ariyawansa Rd", value: 38 },
  ];

  const weeklyCount = [1, 5, 2, 0, 3, 2, 4];
  const monthlyCount = [10, 13, 24, 6, 12, 2, 20, 11, 14, 17, 4, 9];

  const detectedViolations = 5;
  const reportedAccidents = 3;

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
      </Grid>
    </Box>
  );
};

export default Dashboard;
