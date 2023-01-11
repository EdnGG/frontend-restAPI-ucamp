import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <img src="https://picsum.photos/50/50?grayscale" alt="Brand" />
          <Link className="px-2 navbar-brand w-45 justify-content-start" to="/">GUITARWORLD</Link>
          <Link className="nav-link active p-3" aria-current="page" to="/guitars">Catalog</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div className="navbar-nav m-2 justify-content-start w-100">
              {/* <Link className="nav-link active p-3" aria-current="page" to="/guitars">Catalog</Link> */}
              
            {/* <Link className="nav-link p-3" to="/DFSFDS">USD</Link>
            <Link className="nav-link p-3" to="/login">Login</Link>
            <Link className="nav-link p-3 " to="/signin">Sign In</Link> */}
              
            </div>
            <div className="d-flex justify-content-end w-100">
            <Link className="nav-link p-3" to="/DFSFDS">USD</Link>
            <Link className="nav-link p-3" to="/login">Login</Link>
            <Link className="nav-link p-3 " to="/signin">Sign In</Link>
            </div>
            
        </div>
      </div>
    </nav>
  </div>
  );
}

export default Header;