import "./App.css";
import { Navbar } from "./Components/NavComponent/Navbar/Navbar";
import ToggleSwitch from "./Components/NavComponent/ToggleSwitch/ToggleSwitch";
// import useLocalStorage from "use-local-storage";
import { getWindow, getDocument } from "ssr-window";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { FAQ } from "./Components/NavbarComponent/FAQ/FAQ.js";

import { Home } from "./Components/NavbarComponent/Home/Home";
import { Header } from "./Components/NavComponent/Header/Header";
import { Learnings } from "./Components/NavbarComponent/Learnings/Learnings";
import { News } from "./Components/NavbarComponent/News/News.js";
import { C } from "./Components/NavbarComponent/Learnings/C/C";
import { C_History } from "./Components/NavbarComponent/Learnings/C/C_History/C_History";
import { WhatisC } from "./Components/NavbarComponent/Learnings/C/WhatisC/WhatisC";
import { Login } from "./Components/NavbarComponent/login/Login";
import "../src/Components/NavbarComponent/News/News.css";
import { Signup } from "./Components/NavbarComponent/Signup/Signup";
import Alert from "./Components/Alert/Alert";
import { Welcome } from "./Components/NavbarComponent/Welcome/Welcome";
import { DSA } from "./Components/NavbarComponent/Learnings/DSA/DSA";

import { Datastructure } from "./Components/NavbarComponent/Learnings/DSA/introduction/Datastructure/Datastructure.js";
import { Algo } from "./Components/NavbarComponent/Learnings/DSA/introduction/Algo/Algo.js";
import { Absdatatype } from "./Components/NavbarComponent/Learnings/DSA/introduction/Absdatatype/Absdatatype.js";

import { Circularlinkedlist } from "./Components/NavbarComponent/Learnings/DSA/lineards/Circularlinkedlist/Circularlinkedlist.js";
import { CircularQ } from "./Components/NavbarComponent/Learnings/DSA/lineards/CircularQ/CircularQ.js";
import { Doublylinkedlist } from "./Components/NavbarComponent/Learnings/DSA/lineards/Doublylinkedlist/Doublylinkedlist";
import { Array } from "./Components/NavbarComponent/Learnings/DSA/lineards/Array/Array.js";
import { Queue } from "./Components/NavbarComponent/Learnings/DSA/lineards/Queue/Queue.js";
import { Stack } from "./Components/NavbarComponent/Learnings/DSA/lineards/Stack/Stack.js";
import { Graph } from "./Components/NavbarComponent/Learnings/DSA/non-linear/Graph/Graph.js";
import { Tree } from "./Components/NavbarComponent/Learnings/DSA/non-linear/Tree/Tree.js";
import { BipaprtiteGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/BipaprtiteGraph/BipaprtiteGraph.js";
import { CompleGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/CompleGraph/CompleteGraph.js";
import { CondisGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/CondisGraph/CondisGraph.js";
import { DiagraphGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/DiagraphGraph/DiagraphGraph.js";
import { DiracyclicGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/CondisGraph/CondisGraph.js";
import { FiniteGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/DiracyclicGraph/DiracyclicGraph.js";
import { Infinitegraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/Infinitegraph/Infinitegraph.js";
import { LabelledGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/LabelledGraph/LablledGraph.js";
import { MultiGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/MultiGraph/MultiGraph.js";
import { Nullgraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/Nullgraph/Nullgraph.js";
import { PseudoGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/PseudoGraph/PseudoGraph.js";
import { RegularGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/RegularGraph/RegularGraph.js";
import { SimpleGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/SimpleGraph/SimpleGraph.js";
import { Subgraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/Subgraph/Subgraph.js";
import { TrivialGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/TrivialGraph/TrivialGraph.js";
import { VertexlabledGraph } from "./Components/NavbarComponent/Learnings/DSA/Typesofgraph/VertexlabledGraph/VertexlabledGraph.js";

import { AVLtree } from "./Components/NavbarComponent/Learnings/DSA/Typesoftree/AVLtree/AVLtree.js";
import { Btree } from "./Components/NavbarComponent/Learnings/DSA/Typesoftree/Btree/Btree.js";
import { Gentree } from "./Components/NavbarComponent/Learnings/DSA/Typesoftree/Gentree/Gentree.js";
import { Heap } from "./Components/NavbarComponent/Learnings/DSA/Typesoftree/Heap/Heap.js";
import { Redblacktree } from "./Components/NavbarComponent/Learnings/DSA/Typesoftree/Redblacktree/Redblacktree.js";
import { SplayTree } from "./Components/NavbarComponent/Learnings/DSA/Typesoftree/SplayTree/SplayTree.js";

import { AfterEffect } from "./Components/Style/AfterEffect/AfterEffect";

function App() {
  const window = getWindow();
  const document = getDocument();
  const [theme, settheme] = useState("light");

  const HandleOnToggle = () => {
    if (theme === "dark") settheme("light");
    else settheme("dark");
  };

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [theme, setTheme] = useLocalStorage(
  //   "theme",
  //   defaultDark ? "dark" : "light"
  // );
  return (
    <>
      <Router>
        <div className="App" data-theme={theme}>
          <div>
            {window.location.href !== "http://localhost:3000/" &&
              window.location.href !== "http://localhost:3000/login" &&
              window.location.href !== "http://localhost:3000/signUp" &&
              localStorage.getItem("token") && <Header />}
            {window.location.href !== "http://localhost:3000/" &&
              window.location.href !== "http://localhost:3000/login" &&
              window.location.href !== "http://localhost:3000/signUp" &&
              localStorage.getItem("token") && (
                <Navbar>
                  <ToggleSwitch
                    label="Mode"
                    HandleToggle2={HandleOnToggle}
                    isOn={theme}
                  />
                </Navbar>
              )}

            {<Alert alert={alert} />}

            <div className="RoutingElement">
              <Routes>
                {localStorage.getItem("token") && (
                  <Route
                    exact
                    path="/Home"
                    element={<Home showAlert={showAlert} />}
                  />
                )}

                {localStorage.getItem("token") && (
                  <Route exact path="/learnings" element={<Learnings />} />
                )}

                {localStorage.getItem("token") && (
                  <Route
                    exact
                    path="/News"
                    element={
                      <News pageSize={9} country="in" category="science" />
                    }
                  />
                )}
                {localStorage.getItem("token") && (
                  <Route exact path="/FAQ" element={<FAQ />} />
                )}
                {localStorage.getItem("token") && (
                  <Route exact path="/learnings/C" element={<C />} />
                )}
                {localStorage.getItem("token") && (
                  <Route
                    exact
                    path="/learnings/C/C_History"
                    element={<C_History />}
                  />
                )}
                {localStorage.getItem("token") && (
                  <Route
                    exact
                    path="/learnings/C/What_is_C_language"
                    element={<WhatisC />}
                  />
                )}

                <Route
                  exact
                  path="/"
                  element={<Welcome showAlert={showAlert} />}
                />
                 <Route
                  exact
                  path="/"
                  element={<AfterEffect showAlert={showAlert} />}
                />
                {!localStorage.getItem("token") && (
                  <Route
                    exact
                    path="/login"
                    element={<Login showAlert={showAlert} />}
                  />
                )}
                {!localStorage.getItem("token") && (
                  <Route
                    exact
                    path="/signUp"
                    element={<Signup showAlert={showAlert} />}
                  />
                )}

                {localStorage.getItem("token") && (
                  <Route
                    exact
                    path="/Data-Structure"
                    element={<DSA showAlert={showAlert} />}
                  />
                )}
                {!localStorage.getItem("token") && (
                  <Route
                    exact
                    path="/Data-Structure/introduction"
                    element={<Datastructure showAlert={showAlert} />}
                  />
                )}

                {!localStorage.getItem("token") && (
                  <Route
                    exact
                    path="/Data-Structure/Algorithm"
                    element={<Algo showAlert={showAlert} />}
                  />
                )}
                {!localStorage.getItem("token") && (
                  <Route
                    exact
                    path="/DataStructure/Abstract-DataType"
                    element={<Absdatatype showAlert={showAlert} />}
                  />
                )}
                {/* {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />}
                {!localStorage.getItem('token') &&
                  <Route
                  exact
                  path="/signUp"
                  element={<Signup showAlert={showAlert} />}
                />} */}
              </Routes>
            </div>
            {window.location.href !== "http://localhost:3000/" &&
              window.location.href !== "http://localhost:3000/login" &&
              window.location.href !== "http://localhost:3000/signUp" &&
              localStorage.getItem("token") && <Footer />}
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
