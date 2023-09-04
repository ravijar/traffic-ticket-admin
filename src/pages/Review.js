import React from "react";
import EnhancedTable from "../components/EnhancedTable";
import { Container } from "@mui/material";

// dummy data
function createData(vehicleNo, location, date, time) {
  return {
    vehicleNo,
    location,
    date,
    time,
  };
}

const rows = [
  createData("XYZ 1769", "Rawathawatta Rd", "2023/09/03", "06:30 AM"),
  createData("ABC 5678", "Molpe Rd", "2023/09/04", "07:45 AM"),
  createData("DEF 9012", "Seevali Rd", "2023/09/05", "08:15 AM"),
  createData("GHI 3456", "Katubedda", "2023/09/06", "09:30 AM"),
  createData("JKL 7890", "Ariyasena Rd", "2023/09/07", "10:45 AM"),
  createData("MNO 2345", "Mendis Ln", "2023/09/08", "11:00 AM"),
  createData("PQR 1769", "Rawathawatta Rd", "2023/09/09", "06:30 AM"),
  createData("STU 5678", "Molpe Rd", "2023/09/10", "07:45 AM"),
  createData("VWX 9012", "Seevali Rd", "2023/09/11", "08:15 AM"),
  createData("YZA 3456", "Katubedda", "2023/09/12", "09:30 AM"),
  createData("BCD 7890", "Ariyasena Rd", "2023/09/13", "10:45 AM"),
  createData("EFG 2345", "Mendis Ln", "2023/09/14", "11:00 AM"),
  createData("HIJ 1769", "Rawathawatta Rd", "2023/09/15", "06:30 AM"),
  createData("KLM 5678", "Molpe Rd", "2023/09/16", "07:45 AM"),
  createData("NOP 9012", "Seevali Rd", "2023/09/17", "08:15 AM"),
  createData("QRS 3456", "Katubedda", "2023/09/18", "09:30 AM"),
  createData("TUV 7890", "Ariyasena Rd", "2023/09/19", "10:45 AM"),
  createData("WXY 2345", "Mendis Ln", "2023/09/20", "11:00 AM"),
  createData("ZAB 1769", "Rawathawatta Rd", "2023/09/21", "06:30 AM"),
  createData("CDE 5678", "Molpe Rd", "2023/09/22", "07:45 AM"),
  createData("FGH 9012", "Seevali Rd", "2023/09/23", "08:15 AM"),
  createData("IJK 3456", "Katubedda", "2023/09/24", "09:30 AM"),
  createData("LMN 7890", "Ariyasena Rd", "2023/09/25", "10:45 AM"),
  createData("OPQ 2345", "Mendis Ln", "2023/09/26", "11:00 AM"),
  createData("RST 1769", "Rawathawatta Rd", "2023/09/27", "06:30 AM"),
  createData("UVW 5678", "Molpe Rd", "2023/09/28", "07:45 AM"),
  createData("XYZ 9012", "Seevali Rd", "2023/09/29", "08:15 AM"),
  createData("ABC 3456", "Katubedda", "2023/09/30", "09:30 AM"),
];

const Review = () => {
  // table header data
  const head = [
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
  ];

  return (
    <Container>
      <EnhancedTable
        defaultValues={{
          orderBy: "date",
          dense: false,
          rowsPerPage: 5,
        }}
        alignValues={{
          body: ["center", "center", "center", "center"],
          head: ["center", "center", "center", "center"],
        }}
        tableTitle="CCTV Violation Detections"
        headCells={head}
        rows={rows}
      />
    </Container>
  );
};

export default Review;
