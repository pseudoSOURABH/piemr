import React from "react";
import "./Navbar.css";

export const Navbar = (props) => {
  return (
    <>
      <div className="Navbar">
        <ul>
          <li>Home</li>
          <li>Find-Friends</li>
          <li>About</li>
          <li>Contact-Us</li>
          <li>QAFS</li>
          {props.children}
          
        </ul>
       
      </div>
    </>
  );
};
