import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Guitars from "./pages/Guitars";
 

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/guitars" element={<Guitars />} /> 
          <Route path="/guitar/:id" element={<Guitars />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
