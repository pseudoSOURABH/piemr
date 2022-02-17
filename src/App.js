import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
// import useLocalStorage from "use-local-storage";
// import { getWindow, getDocument } from "ssr-window";
import { useState } from "react";
import { BouncingBalls } from "./BouncingBalls/BouncingBalls";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Footer/Footer";

function App() {
  // const window = getWindow();
  // const document = getDocument();
  const [theme, settheme] = useState("light");

  const HandleOnToggle = () => {
    if (theme === "dark") settheme("light");
    else settheme("dark");
  };

  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [theme, setTheme] = useLocalStorage(
  //   "theme",
  //   defaultDark ? "dark" : "light"
  // );
  return (
    <>
      {" "}
      <Router>
        <div className="App" data-theme={theme}>
          <Navbar>
            <ToggleSwitch
              label="Mode"
              HandleToggle2={HandleOnToggle}
              isOn={theme}
            />
          </Navbar>
          <BouncingBalls />

          <div className="RoutingElement">
            <Routes>
              <Route exact path="/" element={<Footer />} />
              <Route exact path="/Find-Friends" element={<Footer />} />
              <Route exact path="/About" element={<Footer />} />
              <Route exact path="/Contact-Us" element={<Footer />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
