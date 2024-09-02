import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import AddTask from "./Components/AddTask";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main/>

      </div>

    </BrowserRouter>
  );
}

export default App;
