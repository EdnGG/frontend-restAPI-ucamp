import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container__image">
        <h1 className="display-4 fw-bolder">
          Guitar of your dreams is waiting for you!!
        </h1>
        {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
        <hr className="my-4"></hr>
        <p className="fw-bold">
          We got the most exted catalog of all continent. We ship everywere in
          the world.
        </p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/guitars" role="button">
            See Catalog
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
