import React from "react";
import "./Navbar.css";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
// import piemrlogo from '../Images/piemrlogo.jpg';

export const Navbar = (props) => {
  return (
    <>
      <div className="wlcmpg">
        {
          <div className="Navbar">
            <ul className=" Navbarul">
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>

              <li>
                <NavLink to="/learnings">Learnigs</NavLink>
              </li>
              <li className="newsli">
                <NavLink to="/News">News</NavLink>
              </li>
              <li>
                <NavLink to="/FAQ">FAQ'S</NavLink>
              </li>
              {props.children}
            </ul>
          </div>
        }
      </div>
    </>
  );
};
