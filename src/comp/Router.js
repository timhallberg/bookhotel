import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Booking from "./Booking";

function Router() {
  return (
    <>
      <nav>
        <li>
          {/* Varning för ClassName men annars fungerar inte active. Vi får kika på det. */}
          <NavLink ClassName="active" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink ClassName="active" to="/booking">
            Booking
          </NavLink>
        </li>
        <li>
          <NavLink ClassName="active" to="/about">
            About
          </NavLink>
        </li>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Router;
