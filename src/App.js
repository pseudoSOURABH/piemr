import "./App.css";
import { Navbar } from "./Components/NavComponent/Navbar/Navbar";
import ToggleSwitch from "./Components/NavComponent/ToggleSwitch/ToggleSwitch";
// import useLocalStorage from "use-local-storage";
// import { getWindow, getDocument } from "ssr-window";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { FAQ } from "./Components/NavbarComponent/FAQ/FAQ.js";

import {Home} from './Components/NavbarComponent/Home/Home';
import { Header } from "./Components/NavComponent/Header/Header";
import { Learnings } from "./Components/NavbarComponent/Learnings/Learnings";
import { News } from "./Components/NavbarComponent/News/News.js";
import { C } from "./Components/NavbarComponent/Learnings/C/C";
import { C_History } from "./Components/NavbarComponent/Learnings/C/C_History/C_History";

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
        <Header/>
        <div className="App" data-theme={theme}>
          <Navbar>
            <ToggleSwitch
              label="Mode"
              HandleToggle2={HandleOnToggle}
              isOn={theme}
            />
          </Navbar>
          
          {/* <BouncingBalls /> */}

          <div className="RoutingElement">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/learnings" element={<Learnings/>} />
             
              <Route exact path="/News" element={<News/>} />
              <Route exact path="/FAQ" element={<FAQ/>} />
              <Route exact path="/learnings/C" element={<C/>} />
              <Route exact path="/learnings/C/C_History" element={<C_History/>} />
              
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
