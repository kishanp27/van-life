import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }
  return (
    <>
      <nav className="host-nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to={"."}
        >
          Dashboard
        </NavLink>
        <NavLink
          // className={({ isActive }) => (isActive ? "active-link" : null)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to={"income"}
        >
          Income
        </NavLink>
        <NavLink
          // className={({ isActive }) => (isActive ? "active-link" : null)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to={"vans"}
        >
          Vans
        </NavLink>
        <NavLink
          // className={({ isActive }) => (isActive ? "active-link" : null)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to={"reviews"}
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default HostLayout;
