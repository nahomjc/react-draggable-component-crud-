import React from "react";
import logo from "./logo.svg";

import Draggable from "./component/Draggable";
import Category from "./component/parent/Category";
import Header from "./component/head/Header";
function App() {
  return (
    <div>
      <header className="App-header">
        <Header />
        <Draggable />
      </header>
    </div>
  );
}

export default App;
