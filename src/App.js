import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />}></Route>
      </Routes>

    </div>
  );
}

export default App;
