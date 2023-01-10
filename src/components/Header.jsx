import { Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">GUITARWORLD</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" to="/guitars">Catalog</Link>
            <Link class="nav-link" to="/DFSFDS">USD</Link>
            <Link class="nav-link" to="/login">Login</Link>
            <Link class="nav-link disabled" to="/signin">Sign In</Link>
          </div>
        </div>
      </div>
    </nav>
  </>
  );
}

export default Header;