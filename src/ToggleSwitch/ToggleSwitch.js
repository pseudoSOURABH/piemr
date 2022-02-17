import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isOn, HandleToggle2, label }) => {
  return (
    <>
      <div className="togglecontainer">
        <input
          onClick={HandleToggle2}
          defaultChecked={isOn}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />

        <label
          style={{ background: isOn === "dark" ? "darkgreen" : "grey" }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
           
          

          <div>
            <span className={`react-switch-button`} />
          </div>
        </label>
        
      </div>
    </>
  );
};

export default ToggleSwitch;
