import React from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import piemrlogo from '../Images/piemrlogo.jpg';

export const Navbar = (props) => {
  return (
    <>
      <div className="Navbar">
        <ul className=" Navbarul">
          
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/learnings">Learings</Link>
          </li>
          <li>
            <Link to="/News">Tech-Update</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ'S</Link>
          </li>
          {props.children}
        </ul>
      </div>
    </>
  );
};
