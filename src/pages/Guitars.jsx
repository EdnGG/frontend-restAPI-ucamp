import React, { useEffect, useState } from "react";
import Card from "../components/core/Card";
import clientAxios from "../components/config/axios";

const Guitars = () => {
  const [guitars, setGuitars] = useState([]);

  const getGuitars = async () => {
    const res = await clientAxios.get("/guitars");
    setGuitars(res.data["data"]);
    console.log(guitars);
  };

  useEffect(() => {
    console.log("Guitars page loaded");
    getGuitars();
    console.log(guitars);
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <h1 className="p-4 m-4">Guitars</h1>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-wrap p-2 justify-content-center align-items-center">
          {guitars.map((guitar, index) => (
            <div className="col-md-4 col-sm-6 mb-4 py-2 my-2 px-2 mx-2">
              <Card
                key={index}
                image={guitar.image}
                title={
                  guitar.brand.toUpperCase() + " " + guitar.name.toUpperCase()
                }
                description={guitar.color.toUpperCase() + " - $" + guitar.price}
                className="py-2 my-2 px-2 mx-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guitars;
