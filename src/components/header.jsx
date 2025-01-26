import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/layout";
import Home from "../pages/home";
import CreateListing from "../pages/createListing/components/createListing";
import Dashboard from "../pages/dashboard";
import "./header.css";
import AmazonListingAboutInfo from "../pages/amazonListing/components/amazonListingAbout";

function Header() {
  return (
    <header className="header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="createListing" element={<CreateListing />} />
            <Route
              path="/details/:id"
              element={<AmazonListingAboutInfo />}
            />{" "}
            {/* Route for details page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default Header;
