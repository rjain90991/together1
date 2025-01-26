import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      {/* Header */}
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/createListing">Create Listing</Link>
          </li>
        </ul>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
