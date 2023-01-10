import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = () => {
  return (

    <div className="App">
      
      <Header/>
      <Outlet />
      <Footer/>
    </div>
    



  //   <div>
  //   <nav>
  //     <ul> 
  //       <li>
  //         <Link to="/home">Home</Link>
  //       </li>
  //       <li>
  //         <Link to="/signin">SignIn</Link>
  //       </li>
  //       <li>
  //         <Link to="/login">Login</Link>
  //       </li>
  //       <li>
  //         <Link to="/guitars">Guitars</Link>
  //       </li>
  //     </ul>
  //   </nav>
  //   <Outlet />
  // </div>
  );
}; 

export default Layout;
