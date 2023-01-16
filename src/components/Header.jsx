import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-light ">
        {/* image, title and subtitle */}
        <div className="d-flex px-3 py-3 justify-content-start justify-content-sm-around align-items-center">
          <img src="https://picsum.photos/100/100?grayscale" className="rounded" alt="Brand" />
          <Link className="px-2 navbar-brand" to="/">GUITARWORLD</Link>
          <Link className="px-2 navbar-brand nav-link" to="/guitars">Catalog</Link>
        </div>
        

        <div className="container">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

              <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

              {/* <div className="navbar-nav m-2 justify-content-end w-100"> */}
                <Link className="nav-link p-3" to="/ddssdf">USD</Link>
                <Link className="nav-link p-3" to="/login">Login</Link>
                <Link className="nav-link p-3 " to="/signin">Sign In</Link>
              {/* </div> */}
                
            {/* <div className="d-flex justify-content-end w-100">
                <Link className="nav-link p-3" to="/DFSFDS">USD</Link>
                <Link className="nav-link p-3" to="/login">Login</Link>
                <Link className="nav-link p-3 " to="/signin">Sign In</Link>
              </div> */}
                
              </div>
          
      </div>
    </nav>
  </div>
  );
}

export default Header;