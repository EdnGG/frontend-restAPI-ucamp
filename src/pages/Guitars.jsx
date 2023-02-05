import React, { useEffect, useState } from "react";
import Card from "../components/core/Card";
import clientAxios from "../components/config/axios";

const Guitars = () => {
  const [guitars, setGuitars] = useState([]);

  const getGuitars = async () => {
    const res = await clientAxios.get("/guitars");
    setGuitars(res.data["data"]);
  };

  useEffect(() => {
    console.log("Guitars page loaded");
    getGuitars();
  }, []);

  return (
    <>
      <div>
        <h1 className="p-2 m-4">Guitars</h1>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-wrap p-2 justify-content-center align-items-center">
          {guitars.map((guitar, index) => (
            <Card
              key={index}
              image={guitar.image}
              title={guitar.brand + " " + guitar.name}
              description={guitar.color + " - " + guitar.price}
              className="p-4 m-4 bl-light"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Guitars;
