import "./App.css";
import Header from "./comp/Header";
import Search from "./comp/Search";
// import Booking from "./comp/Booking";
import Router from "./comp/Router" 
import TripCategori from "./comp/TripCategori";
import Stars from "./comp/Stars";
// import { NavLink, Route, Routes } from "react-router-dom";
// import Home from "./comp/Home";
// import About from "./comp/About";

function App() {
  return (
    <div className="App">
      {/* <nav>
        <li>
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
      </Routes> */}

      <Router></Router>

     
 
    </div>
  );
}

export default App;
