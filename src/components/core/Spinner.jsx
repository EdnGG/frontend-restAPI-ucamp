import React from "react";

const Spinner = (props) => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">{props.message}</span>
      </div>
    </div>
  );
};

export default Spinner;
