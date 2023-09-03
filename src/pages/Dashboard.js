import { PieChart } from "@mui/x-charts/PieChart";
import { Card, CardContent, CardHeader, Container, Grid } from "@mui/material";

const Dashboard = () => {
  // dummy data
  const vehicleCount = [
    { label: "Molpe Rd", value: 105 },
    { label: "Mendis Ln", value: 55 },
    { label: "Seevali Rd", value: 127 },
    { label: "Katubedda", value: 178 },
    { label: "Rawathawatta", value: 75 },
    { label: "Ariyawansa Rd", value: 38 },
  ];

  return (
    <Container>
      {/* vehicle count chart */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              title="Vehicle Count"
              sx={{ textAlign: "center", bgcolor: "#616161", color: "white" }}
            />
            <Container sx={{ bgcolor: "#D2D2D2" }}>
              <CardContent>
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
                      cy: 100,
                    },
                  ]}
                  legend={{
                    direction: "column",
                    position: {
                      vertical: "bottom",
                      horizontal: "middle",
                    },
                  }}
                  sx={{
                    "--ChartsLegend-rootOffsetX": "30px",
                    "--ChartsLegend-rootOffsetY": "-150px",
                  }}
                  width="210"
                  height="370"
                />
              </CardContent>
            </Container>
          </Card>
        </Grid>

        {/* recent accidents */}
        <Grid item xs={12} md={5}>
          <Card>
            <Container>
              <CardHeader />
              <CardContent></CardContent>
            </Container>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
