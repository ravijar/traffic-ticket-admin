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
import axios from "axios";

// search bar styles
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
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
      id: "description",
      label: "Description",
    },
    {
      id: "vehicles",
      label: "Related Vehicles",
    },
  ];

  const finesHead = [
    {
      id: "fine_id",
      label: "Fine ID",
    },
    {
      id: "driver_nic",
      label: "Driver NIC",
    },
    {
      id: "vehicle_number",
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
      id: "violation_type",
      label: "Violation",
    },
    {
      id: "due_date",
      label: "Due Date",
    },
    {
      id: "payment",
      label: "Payment Status",
    },
  ];

  const policeOfficersHead = [
    {
      id: "officer_id",
      label: "Officer ID",
    },
    {
      id: "full_name",
      label: "Name",
    },
    {
      id: "nic",
      label: "NIC",
    },
    {
      id: "police_station",
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
      id: "full_name",
      label: "Name",
    },
    {
      id: "vehicle_number",
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
  const [rows, setRows] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  // search function
  const searchValue = (data, attribute, value) =>
    data.filter((datum) =>
      datum[attribute].toLowerCase().includes(value.toLowerCase())
    );

  // fetching data
  const fetchData = (attribute) => {
    axios
      .get(`http://localhost:8000/api/${attribute}/`)

      .then((res) => {
        setFetchedData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handlers
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
      if (attribute !== "") {
        if (input !== "") {
          setRows(searchValue(fetchedData, attribute, input));
        }
      } else {
        setAttributeError(true);
      }
    }
  };

  // fetching data on changing tab
  useEffect(() => {
    switch (tab) {
      case "policeOfficers":
        fetchData("policeofficers");
        break;
      case "fines":
        fetchData("fines");
        break;
      case "drivers":
        fetchData("drivers");
        break;
      default:
        fetchData("accidents");
        break;
    }
  }, [tab]);

  // updating rows to default values after a search
  useEffect(() => {
    if (input === "") {
      setRows(fetchedData);
    } else {
      if (attribute !== "") {
        setRows(searchValue(fetchedData, attribute, input));
      } else {
        setAttributeError(true);
      }
    }
  }, [fetchedData, input, attribute]);

  // table parameters
  let orderBy = "date";
  let tableTitle = "Accidents";
  let headCells = accidentsHead;

  switch (tab) {
    case "policeOfficers": {
      orderBy = "officerId";
      tableTitle = "Police Officers";
      headCells = policeOfficersHead;
      break;
    }
    case "fines": {
      orderBy = "finesId";
      tableTitle = "Fines";
      headCells = finesHead;
      break;
    }
    case "drivers": {
      orderBy = "nic";
      tableTitle = "Drivers";
      headCells = driversHead;
      break;
    }
    default: {
      orderBy = "date";
      tableTitle = "Accidents";
      headCells = accidentsHead;
      break;
    }
  }

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
          <Box sx={{ bgcolor: "#DEDEDE", padding: 3 }}>
            <FormControl
              sx={{ marginBottom: 3, width: "100%" }}
              error={attributeError}
            >
              <InputLabel>Attribute</InputLabel>
              <Select
                label="Attribute"
                value={attribute}
                onChange={handleSelect}
              >
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
                value={input}
              />
            </Search>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Reports;
