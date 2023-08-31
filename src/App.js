import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import Navigation from "./layouts/Navigation";
import Dashboard from "./pages/Dashboard";
import Review from "./pages/Review";
import Reports from "./pages/Reports";
import Schedule from "./pages/Schedule";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Dashboard />} />
      <Route path="review" element={<Review />} />
      <Route path="reports" element={<Reports />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
