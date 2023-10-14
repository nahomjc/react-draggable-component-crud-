import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Draggable from "./component/Draggable";
import Category from "./component/parent/Category";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Draggable />
      </header>
    </div>
  );
}

export default App;
