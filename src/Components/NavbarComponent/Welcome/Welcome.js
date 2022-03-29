import React from "react";
import "./Welcome.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Welcome = () => {
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") && navigate("/Home");
    window.onload = function() {
      if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
      }
    }
  });
  

  return (
    <div>
      <div>
        <h1>welcome to piemr learning page</h1>
        <div className="cred">
          <form className="credentialsbutton">
            <li>
              <Link
                className="loginbutton"
                to="/login"
                role="button"
                type="submit"
              >
                login
              </Link>
            </li>
            <li>
              <Link className="signupbutton" to="/signUp" role="button">
                signUp
              </Link>
            </li>
          </form>
        </div>
      </div>
    </div>
  );
};
