import React from "react";
import "./Header.css";
import logo from "./piemrlogo.jpg";
import { Link, Navigate } from "react-router-dom";


export const Header = () => {


  const clcklogout=()=>{
    localStorage.removeItem('token');
    Navigate('/');
  }
  return (
    <div className="Header">
      <ul>
        <img className="piemrlogo" src={logo} alt="not loaded" />
       <h1> Get Widden Your Wings </h1>
       
          <Link className="logoutbutton" to="/" role="button" onClick={clcklogout}>
          Logout
        </Link>
      
      </ul>
    </div>
  );
};
