import React from "react";
import Router from "./Router";
import { NavLink } from "react-router-dom";
import { BiLogIn, BiLogInCircle } from "react-icons/bi";

function Header() {
  return (
    <>
      <div style={{ backgroundColor: "#FF8C8C" }} className="navSection">
        <div className="navBar">
          <div className="Brandbox">
            <div className="BrandBox-left">
              <img
                className="Brand"
                src="https://cdn.glitch.global/ff635638-a414-4d00-8436-ba9e34e867e8/5fe89ba7a66535ebd82e2f34_WT%20CarlvonStein.svg?v=1662990446415"
                alt=""
              />
            </div>

            <div className="BrandBox-middle">
              <nav>
                <li>
                  {/* Varning för ClassName men annars fungerar inte active. Vi får kika på det. */}
                  <NavLink
                    style={{ color: "white", textDecoration: "none" }}
                    ClassName="active"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{ color: "white", textDecoration: "none" }}
                    ClassName="active"
                    to="/booking"
                  >
                    Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{ color: "white", textDecoration: "none" }}
                    ClassName="active"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
              </nav>
            </div>

            <div className="BrandBox-right">
              <BiLogInCircle style={{ color: "white", fontSize: "25px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

{
  /* <div className="navSection">
        <div className="navBar">
          <div>
            <img
              className="Brand"
              src="https://cdn.glitch.global/ff635638-a414-4d00-8436-ba9e34e867e8/5fe89ba7a66535ebd82e2f34_WT%20CarlvonStein.svg?v=1662990446415"
              alt=""
            />
          </div>
          <div>
    

            
          </div>
          <div>3</div>
        </div>
      </div> */
}
