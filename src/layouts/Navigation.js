import { NavLink, Outlet, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ReviewIcon from "@mui/icons-material/Policy";
import ReportsIcon from "@mui/icons-material/Leaderboard";
import ScheduleIcon from "@mui/icons-material/PendingActions";
import RegisterIcon from "@mui/icons-material/PersonAddAlt1";

const Navigation = () => {
  const location = useLocation();

  const drawerWidth = 160;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            TRAFFIC TICKET
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <MenuList>
            <MenuItem
              component={NavLink}
              to="/"
              selected={location.pathname === "/"}
              sx={{ p: 2 }}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </MenuItem>

            <MenuItem
              component={NavLink}
              to="review"
              selected={location.pathname === "/review"}
              sx={{ p: 2 }}
            >
              <ListItemIcon>
                <ReviewIcon />
              </ListItemIcon>
              <ListItemText primary={"Review"} />
            </MenuItem>

            <MenuItem
              component={NavLink}
              to="reports"
              selected={location.pathname === "/reports"}
              sx={{ p: 2 }}
            >
              <ListItemIcon>
                <ReportsIcon />
              </ListItemIcon>
              <ListItemText primary={"Reports"} />
            </MenuItem>

            <MenuItem
              component={NavLink}
              to="schedule"
              selected={location.pathname === "/schedule"}
              sx={{ p: 2 }}
            >
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              <ListItemText primary={"Schedule"} />
            </MenuItem>

            <MenuItem
              component={NavLink}
              to="register"
              selected={location.pathname === "/register"}
              sx={{ p: 2 }}
            >
              <ListItemIcon>
                <RegisterIcon />
              </ListItemIcon>
              <ListItemText primary={"Register"} />
            </MenuItem>
          </MenuList>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Navigation;
