import React from "react";
import Card from "../components/core/Card";

const Guitars = () => {
  return (
    <>
      <div>
        <h1 className="p-2 m-4">Guitars</h1>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-wrap p-2 justify-content-center align-items-center">
          <Card
            image="https://picsum.photos/id/30/200/300"
            title="Guitar 1"
            description="Description 1"
            className="p-4 m-4 bl-light"
          />
          <Card
            image="https://picsum.photos/id/40/200/300"
            title="Guitar 2"
            description="Description 2"
            className="p-4 m-4 bl-light"
          />
          <Card
            image="https://picsum.photos/id/50/200/300"
            title="Guitar 3"
            description="Description 3"
            className="p-4 m-4 bl-light"
          />
          <Card
            image="https://picsum.photos/id/60/200/300"
            title="Guitar 4"
            description="Description 4"
            className="p-4 m-4 bl-light"
          />
          <Card
            image="https://picsum.photos/id/70/200/300"
            title="Guitar 5"
            description="Description 5"
            className="p-4 m-4 bl-light"
          />
          <Card
            image="https://picsum.photos/id/80/200/300"
            title="Guitar 6"
            description="Description 6"
            className="p-4 m-4 bl-light"
          />
        </div>
      </div>
    </>
  );
};

export default Guitars;
