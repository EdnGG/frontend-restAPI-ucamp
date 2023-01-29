import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Guitars from "./pages/Guitars";
import Main from "./components/Main";
import Paypal from "./components/Paypal";
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signin" element={<SignIn />} />
          <Route path="/guitars" element={<Guitars />} />
          <Route path="/paypal" element={<Paypal />} />
          <Route element={<PrivateRoute />}>
            <Route path="/guitar/:id" element={<Guitars />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
