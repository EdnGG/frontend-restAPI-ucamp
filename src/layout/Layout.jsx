import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar2 from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home"


const layout = () => {
  return (
    <>
      <div className="container__navbar">
        <Navbar2 />
      </div>
      {/* <div className="container__home">
        <Home />
        <Outlet />
      </div>

      
      <div className="container__footer">
        <Footer />
      </div> */}
    </>
  );
}; 

export default layout;
