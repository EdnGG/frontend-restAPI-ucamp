import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  const ctx = useContext(UserContext);

  const { logout, authStatus } = ctx;

  return (
    <Navbar bg="light" expand="lg">
      <Link className="px-2 navbar-brand" to="/">
        GUITARWORLD
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link p-3" to="/guitars">
            Catalog
          </Link>
        </Nav>
        {authStatus ? (
          <Nav>
            <Link className="nav-link p-3" to="/profile">
              Profile
            </Link>
            <Link className="nav-link p-3" to="/" onClick={logout}>
              Logout
            </Link>
            <Link className="nav-link p-3" to="/paypal">
              CheckOut
            </Link>
          </Nav>
        ) : (
          <Nav>
            <Link className="nav-link p-3" to="/signin">
              Sign In
            </Link>
            <Link className="nav-link p-3" to="/login">
              Login
            </Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
