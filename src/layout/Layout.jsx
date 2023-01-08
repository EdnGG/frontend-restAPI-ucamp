import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home"


const layout = () => {
  return (
    <>
      <div className="container__navbar">
        <Navbar />
      </div>
      <div className="container__home">
        <Home />
      </div>

      
      <div className="container__footer">
        <Footer />
      </div>
    </>
  );
};

export default layout;
