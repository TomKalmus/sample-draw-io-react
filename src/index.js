import React from "react";
import ReactDOM from "react-dom";
import MyApp from "./MyApp";

function App() {


  return (
    <div className="App">
      <MyApp />
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
