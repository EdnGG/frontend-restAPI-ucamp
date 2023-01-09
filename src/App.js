import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Guitars from "./pages/Guitars";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />}></Route>
        <Route index element={<Layout />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/guitars" element={<Guitars />} /> 
          {/* <Route path="/guitar/:id" element={<P />} /> */}
          <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
