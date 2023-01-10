import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


const Layout = () => {
  return (
    <div>
    <nav>
      <ul> 
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/guitars">Guitars</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
      
  );
}; 

export default Layout;
