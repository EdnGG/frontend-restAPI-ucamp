import React from "react";
import { useNavigate, Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex align-items-center"
      style={{
        backgroundImage: `url("https://picsum.photos/id/140/1000/1000")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="text-center w-100">
        <h1 className="display-4 mb-3 fw-bolder">404</h1>
        <h2 className="lead mb-3 ">
          The page are you trying to reach doesn't exist!!{" "}
        </h2>
        <Link to="/" className="btn btn-secondary">
          Go back to main page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
