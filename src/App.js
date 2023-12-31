import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";

// theme data
const theme = createTheme({
  palette: {
    primary: {
      light: "#334b65",
      main: "#001F3F",
      dark: "#00152c",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/">
              <Route element={<PrivateRoutes />}>
                <Route element={<Navigation />}>
                  <Route index element={<Dashboard />} />
                  <Route path="review" element={<Review />}>
                    <Route path=":violationId" element={<ReviewItem />} />
                  </Route>
                  <Route path="reports" element={<Reports />} />
                  <Route path="schedule" element={<Schedule />} />
                  <Route path="register" element={<Register />} />
                </Route>
              </Route>
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
