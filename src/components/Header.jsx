import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Header() {
  const ctx = useContext(UserContext);

  const { logout, authStatus } = ctx;

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-light ">
        {/* image, title and subtitle */}
        <div className="d-flex px-3 py-3 justify-content-start justify-content-sm-around align-items-center">
          <img
            src="https://picsum.photos/100/100?grayscale"
            className="rounded"
            alt="Brand"
          />
          <Link className="px-2 navbar-brand" to="/">
            GUITARWORLD
          </Link>
          <Link className="px-2 navbar-brand nav-link" to="/guitars">
            Catalog
          </Link>
        </div>

        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            {/* <Link className="nav-link p-3" to="/paypal">
              CheckOut
            </Link> */}
            {/* <Link className="nav-link p-3" to="/login">
              Login
            </Link> */}
            {/* <Link className="nav-link p-3" to="/login">
              Logout
            </Link> */}
            {/* <Link className="nav-link p-3 " to="/signin">
              Sign In
            </Link>
            <Link className="nav-link p-3" to="/profile">
              Profile
            </Link> */}

            {/* Checar esta logica */}

            {authStatus ? (
              <>
                <Link className="nav-link p-3" to="/profile">
                  {" "}
                  Profile{" "}
                </Link>
                <Link className="nav-link p-3" to="/" onClick={logout}>
                  {" "}
                  Logout
                </Link>
                <Link className="nav-link p-3" to="/paypal">
                  CheckOut
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link p-3" to="/signin">
                  Sign In
                </Link>
                <Link className="nav-link p-3" to="/login">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
