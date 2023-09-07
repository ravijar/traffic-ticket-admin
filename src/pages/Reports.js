import {
  Box,
  Container,
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  alpha,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import EnhancedTable from "../components/EnhancedTable";
import {
  accidentsRows,
  policeOfficersRows,
  finesRows,
  driversRows,
  searchValue,
} from "../data/DummyData";

// search bar styles
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Reports = () => {
  // table heads
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

  const [tab, setTab] = useState("accidents");
  const [attribute, setAttribute] = useState("");
  const [attributeError, setAttributeError] = useState(false);
  const [input, setInput] = useState("");

  const handleTab = (event, value) => {
    setTab(value);
    setAttribute("");
    setInput("");
  };

  const handleSelect = (event) => {
    setAttribute(event.target.value);
    if (event.target.value !== "") {
      setAttributeError(false);
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      console.log("enter", attribute);
      if (attribute !== "") {
        if (input !== "") {
          console.log("logic working");
          rows = searchValue(rows, attribute, input);
          console.log(rows);
        }
      } else {
        setAttributeError(true);
      }
    }
  };

  // table parameters
  let orderBy = "date";
  let tableTitle = "Accidents";
  let headCells = { accidentsHead };
  let rows = { accidentsRows };

  switch (tab) {
    case "policeOfficers": {
      orderBy = "officerId";
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
      orderBy = "nic";
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
  console.log(orderBy);
  return (
    <Container>
      {/* tabs */}
      <Box sx={{ width: "100%", marginBottom: 3 }}>
        <Tabs value={tab} onChange={handleTab}>
          <Tab label="Accidents" value="accidents" />
          <Tab label="Fines" value="fines" />
          <Tab label="Police Officers" value="policeOfficers" />
          <Tab label="Drivers" value="drivers" />
        </Tabs>
      </Box>

      <Grid container spacing={6}>
        {/* table */}
        <Grid item xs={12} md={9}>
          <EnhancedTable
            defaultValues={{
              order: "desc",
              orderBy: orderBy,
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

        {/* search section */}
        <Grid item xs={12} md={3}>
          <FormControl sx={{ m: 1, width: "100%" }} error={attributeError}>
            <InputLabel>Attribute</InputLabel>
            <Select label="Attribute" value={attribute} onChange={handleSelect}>
              <MenuItem value="">None</MenuItem>
              {headCells.map((menuItem) => (
                <MenuItem key={menuItem.id} value={menuItem.id}>
                  {menuItem.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              onKeyDown={handleSearch}
              onChange={handleInput}
            />
          </Search>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Reports;
