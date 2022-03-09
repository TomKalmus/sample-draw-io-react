import React from "react";
import ReactDOM from "react-dom";
import MxGraphEditor from "./MxGraphGridEditor";
import Demo from "./Demo";
import "antd/dist/antd.css";
import "./styles.css";
import ThreatList from "./component/ThreatList.js";

function App() {
  return (
    <div className="App">
      <MxGraphEditor />
      <ThreatList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
