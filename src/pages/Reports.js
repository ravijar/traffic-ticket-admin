import { Box, Container, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import EnhancedTable from "../components/EnhancedTable";

// dummy data
const policeOfficersHead = [
  {
    id: "officerId",
    label: "Officer ID",
  },
  {
    id: "name",
    label: "Name",
  },
  {
    id: "nic",
    label: "NIC",
  },
  {
    id: "policeStation",
    label: "Police Station",
  },
  {
    id: "telephone",
    label: "Telephone",
  },
];
const policeOfficersRows = [
  {
    officerId: "SLP-75834",
    name: "A.S. Jayathunga",
    nic: "729658743V",
    policeStation: "Moratumulla",
    telephone: "0776895427",
  },
];

const driversHead = [
  {
    id: "nic",
    label: "NIC",
  },
  {
    id: "name",
    label: "Name",
  },
  {
    id: "vehicleNo",
    label: "Vehicle No",
  },
  {
    id: "telephone",
    label: "Telephone",
  },
];
const driversRows = [
  {
    nic: "728648743V",
    name: "P.S Wimaladasa",
    vehicleNo: "PQD8745",
    telephone: "0718957642",
  },
];

const accidentsHead = [
  {
    id: "location",
    label: "Location",
  },
  {
    id: "date",
    label: "Date",
  },
  {
    id: "time",
    label: "Time",
  },
  {
    id: "vehicleNos",
    label: "Related Vehicles",
  },
];
const accidentsRows = [
  {
    location: "Katubedda",
    date: "2023/09/06",
    time: "04:30 PM",
    vehicleNos: "ISL8734",
  },
];

const finesHead = [
  {
    id: "fineId",
    label: "Fine ID",
  },
  {
    id: "driverNic",
    label: "Driver NIC",
  },
  {
    id: "vehicleNo",
    label: "Vehicle No",
  },
  {
    id: "location",
    label: "Location",
  },
  {
    id: "date",
    label: "Date",
  },
  {
    id: "time",
    label: "Time",
  },
  {
    id: "violation",
    label: "Violation",
  },
  {
    id: "paymentStatus",
    label: "Payment Status",
  },
];
const finesRows = [
  {
    fineId: "87452864",
    driverNic: "658439756V",
    vehicleNo: "WFS7645",
    location: "Moratumulla",
    date: "2023/08/04",
    time: "08:30 AM",
    violation: "high speed",
    paymentStatus: "paid",
  },
];

const Reports = () => {
  const [tab, setTab] = useState("accidents");
  const handleTab = (event, value) => {
    setTab(value);
  };

  // table parameters
  let orderBy = "date";
  let tableTitle = "Accidents";
  let headCells = { accidentsHead };
  let rows = { accidentsRows };

  switch (tab) {
    case "policeOfficers": {
      orderBy = "officerID";
      tableTitle = "Police Officers";
      headCells = policeOfficersHead;
      rows = policeOfficersRows;
      break;
    }
    case "fines": {
      orderBy = "finesId";
      tableTitle = "Fines";
      headCells = finesHead;
      rows = finesRows;
      break;
    }
    case "drivers": {
      orderBy = "date";
      tableTitle = "Drivers";
      headCells = driversHead;
      rows = driversRows;
      break;
    }
    default: {
      orderBy = "date";
      tableTitle = "Accidents";
      headCells = accidentsHead;
      rows = accidentsRows;
      break;
    }
  }

  return (
    <Container>
      {/* tabs */}
      <Box sx={{ width: "100%" ,marginBottom:3}}>
        <Tabs value={tab} onChange={handleTab}>
          <Tab label="Accidents" value="accidents" />
          <Tab label="Fines" value="fines" />
          <Tab label="Police Officers" value="policeOfficers" />
          <Tab label="Drivers" value="drivers" />
        </Tabs>
      </Box>

      <Grid container spacing={6}>
        {/* table */}
        <Grid item xs={12} md={8}>
          <EnhancedTable
            defaultValues={{
              order: "desc",
              orderBy: { orderBy },
              dense: true,
              rowsPerPage: 10,
            }}
            alignValues={{
              body: new Array(headCells.length).fill("center"),
              head: new Array(headCells.length).fill("center"),
            }}
            styles={{
              bgColors: {
                head: "#757575",
                body: "#EEEEEE",
                toolbar: "#424242",
                pagination: "#757575",
              },
              fontColors: {
                head: "white",
                body: "black",
                toolbar: "white",
                pagination: "white",
              },
            }}
            tableTitle={tableTitle}
            headCells={headCells}
            rows={rows}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Reports;
