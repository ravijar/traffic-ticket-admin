import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ReviewIcon from "@mui/icons-material/Policy";
import ReportsIcon from "@mui/icons-material/Leaderboard";
import ScheduleIcon from "@mui/icons-material/PendingActions";
import RegisterIcon from "@mui/icons-material/PersonAddAlt1";

const drawerWidth = 160;
const appBarHeight = 65;

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const drawerItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/",
    },
    {
      text: "Review",
      icon: <ReviewIcon />,
      path: "/review",
    },
    {
      text: "Reports",
      icon: <ReportsIcon />,
      path: "/reports",
    },
    {
      text: "Schedule",
      icon: <ScheduleIcon />,
      path: "/schedule",
    },
    {
      text: "Register",
      icon: <RegisterIcon />,
      path: "/register",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* app bar */}
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          height: `${appBarHeight}px`,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ display: "flex" }}>
          <Box sx={{ marginLeft: "32px", flexGrow: 1 }}>
            <img src="./logo.png" width="50px" height="56px" alt="logo" />
          </Box>
          <Typography variant="h5">TRAFFIC TICKET</Typography>
          <Box sx={{ marginRight: "32px", width: "50px", flexGrow: 1 }} />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: `${drawerWidth}px`,
          },
        }}
      >
        <List
          sx={{
            height: `calc(100% - ${appBarHeight}px)`,
            marginTop: `${appBarHeight}px`,
          }}
        >
          {drawerItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
              >
                <ListItemIcon style={{ minWidth: "40px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* main content */}
      <Box
        sx={{
          background: "#f9f9f9",
          flexGrow: 1,
          padding: (theme) => theme.spacing(2),
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Navigation;
