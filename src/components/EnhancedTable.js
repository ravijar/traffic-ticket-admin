import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState, useMemo } from "react";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

import { visuallyHidden } from "@mui/utils";

/* ======= Input Props =======
  
  1.  defaultValues : Object
        1. order : String ('asc' | 'desc')
        2. orderBy : String ('id' of column)
        3. dense : Boolean 
        4. rowsPerPage : Numeric
  2. alignValues : Object
        1. head : String Array ('left' | 'center' | 'right')
        1. body : String Array ('left' | 'center' | 'right')              
  3. styles : Object
        1. bgColors : Object
              1. head : String
              2. body : String
              3. toolbar : String
              4. pagination : String
        2. fontColors : Object
              1. head : String
              2. body : String
              3. toolbar : String
              4. pagination : String
  4. headCells : Object Array
        1. id : String
        2. label : String
  5. rows : Object Array ([key : value] pairs)
  6. tableTitle : String
*/

// comparator logic used for sorting
const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

// sorting algorithm
const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

// enhanced table head
const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort, headCells, alignValues, styles } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ bgcolor: styles.bgColor }}>
      <TableRow>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={alignValues[index]}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ color: styles.fontColor }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const EnhancedTable = (props) => {
  const { defaultValues, alignValues, tableTitle, headCells, rows, styles } =
    props;

  const [order, setOrder] = useState(defaultValues.order);
  const [orderBy, setOrderBy] = useState(defaultValues.orderBy);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(defaultValues.dense);
  const [rowsPerPage, setRowsPerPage] = useState(defaultValues.rowsPerPage);

  // handlers
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // getting data to visualize in a page.
  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            bgcolor: styles.bgColors.toolbar,
            color: styles.fontColors.toolbar,
          }}
        >
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {tableTitle}
          </Typography>
          {dense ? (
            <Tooltip title="Expand">
              <IconButton
                onClick={() => setDense(false)}
                sx={{ color: styles.fontColors.toolbar }}
              >
                <FullscreenIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Shrink">
              <IconButton
                onClick={() => setDense(true)}
                sx={{ color: styles.fontColors.toolbar }}
              >
                <FullscreenExitIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCells}
              alignValues={alignValues.head}
              styles={{
                bgColor: styles.bgColors.head,
                fontColor: styles.fontColors.head,
              }}
            />
            <TableBody sx={{ bgcolor: styles.bgColors.body }}>
              {visibleRows.map((row, index) => {
                const rowData = Object.values(row);
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={index}
                    sx={{ cursor: "pointer" }}
                  >
                    {rowData.map((cellData, index) => (
                      <TableCell
                        key={index}
                        align={alignValues.body[index]}
                        sx={{ color: styles.fontColors.body }}
                      >
                        {cellData}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={headCells.length + 1} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            bgcolor: styles.bgColors.pagination,
            color: styles.fontColors.pagination,
          }}
        />
      </Paper>
    </Box>
  );
};

export default EnhancedTable;
