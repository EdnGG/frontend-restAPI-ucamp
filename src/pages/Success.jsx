import React from "react";

const Success = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div
        className="alert alert-success text-center"
        style={{ height: "70vh", width: "50vw" }}
        role="alert"
      >
        <h4 className="alert-heading">¡Purchase Successful!</h4>
        <p>Thanks for trust in us.</p>
        <hr />
        <img src="https://picsum.photos/id/130/600/600" alt="Success Icon" />
      </div>
    </div>
  );
};

export default Success;
