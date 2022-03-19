import React from "react";
import "./Header.css";
import logo from "./piemrlogo.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <ul>
        <img className="piemrlogo" src={logo} alt="not loaded" />
       <h1> Get Widden Your Wings </h1>
        <div className="cred">
          <form className="credentialsbutton">
            <li>
              <Link className="loginbutton" to="/login" role="button" type="submit"  >
                login
              </Link>
            </li>
            <li>
              <Link className="signupbutton" to="/signUp" role="button">
                signUp
              </Link>
            </li>
            {/* <li>
              <Link className="logoutbutton" to="/" role="button">
                Logout
              </Link>
            </li> */}
          </form>
        </div>
      </ul>
    </div>
  );
};
