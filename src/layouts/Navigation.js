import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="review">Review</NavLink>
          <NavLink to="reports">Reports</NavLink>
          <NavLink to="schedule">Schedule</NavLink>
          <NavLink to="register">Register</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Navigation;
