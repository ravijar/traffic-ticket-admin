import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";

import Navigation from "./layouts/Navigation";
import Dashboard from "./pages/Dashboard";
import Review from "./pages/Review";
import Reports from "./pages/Reports";
import Schedule from "./pages/Schedule";
import Register from "./pages/Register";
import ReviewItem from "./pages/ReviewItem";
import Login from "./pages/Login";

const theme = createTheme({
  palette: {
    primary: {
      light: "#334b65",
      main: "#001F3F",
      dark: "#00152c",
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Dashboard />} />
      <Route path="review" element={<Review />}>
        <Route path=":violationId" element={<ReviewItem />} />
      </Route>
      <Route path="reports" element={<Reports />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
