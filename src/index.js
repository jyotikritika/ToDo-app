import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ToDoApp from "./Components/ToDoApp.js";

function App() {
  return (
    <div className="App">
      <ToDoApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
