import React from "react";
import "./Navbar.css";
import { NavLink,Link, useLocation, useNavigate } from "react-router-dom";
// import piemrlogo from '../Images/piemrlogo.jpg';

export const Navbar = (props) => {
  return (
    <>
      <div className="Navbar">
        <ul className=" Navbarul">
          
          <li>
            <NavLink  to="/">Home</NavLink>
          </li>
          
          <li>
            <NavLink  to="/learnings">Learings</NavLink>
          </li>
          <li>
            <NavLink  to="/News">Tech-Update</NavLink>
          </li>
          <li>
            <NavLink  to="/FAQ">FAQ'S</NavLink>
          </li>
          {props.children}
        </ul>
      </div>
    </>
  );
};
