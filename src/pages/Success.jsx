import React from "react";

const Success = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div
        className="col-lg-6 col-md-4 col-sm-2 alert alert-success text-center"
        // style={{ height: "70vh", width: "50vw" }}
        role="alert"
      >
        <h4 className="alert-heading fw-bolder">¡Purchase Successful!</h4>
        <p>Thanks for trust in us.</p>
        <hr />
        <img
          src="https://picsum.photos/id/130/600/600"
          alt="Success Icon"
          style={{ height: "300px", width: "300px" }}
          className="rounded mx-auto d-block"
        />
      </div>
    </div>
  );
};

export default Success;
