import "./App.css";
import Header from "./comp/Header";
import Search from "./comp/Search";
import Booking from "./comp/Booking";
import TripCategori from "./comp/TripCategori";
import Stars from "./comp/Stars";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./comp/Home";
import About from "./comp/About";

function App() {
  return (
    <div className="App">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Header></Header>
      <Search></Search>
      <TripCategori></TripCategori>
      <Stars></Stars>
    </div>
  );
}

export default App;
