import React from "react";
import EnhancedTable from "../components/EnhancedTable";
import { Container } from "@mui/material";
import { rows } from "../data/DummyData";

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
          order: "desc",
          orderBy: "date",
          dense: true,
          rowsPerPage: 10,
        }}
        alignValues={{
          body: ["center", "center", "center", "center"],
          head: ["center", "center", "center", "center"],
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
        tableTitle="CCTV Violation Detections"
        headCells={head}
        rows={rows}
      />
    </Container>
  );
};

export default Review;
