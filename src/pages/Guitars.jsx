import React, { useEffect, useState, useContext } from "react";
// import { UserContext } from "../context/UserContext";
import Spinner from "../components/core/Spinner";
import Card from "../components/core/Card";
import clientAxios from "../components/config/axios";

const Guitars = () => {
  // const { selectedObjects, setSelectedObjects } = useContext(UserContext);
  // console.log("selectedObjects: ", selectedObjects);
  // console.log("setSelectedObjects: ", setSelectedObjects);

  const [guitars, setGuitars] = useState([]);

  const getGuitars = async () => {
    // setTimeout(() => {
    console.log("getGuitars() called");
    const res = await clientAxios.get("/guitars");
    console.log('res.data["data"]: ', res.data["data"]);
    setGuitars(res.data["data"]);
    // }, 3000);
    // const res = await clientAxios.get("/guitars");
    // console.log('res.data["data"]: ', res.data["data"]);
    // setGuitars(res.data["data"]);
  };

  useEffect(() => {
    console.log("Guitars page loaded");
    getGuitars();
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <h1 className="p-4 m-4">Guitars</h1>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-wrap p-2 justify-content-center align-items-center">
          {guitars ? (
            guitars.map((guitar, index) => (
              <div
                key={guitars._id || index}
                className="col-md-4 col-sm-6 mb-4 py-2 my-2 px-2 mx-2"
              >
                <Card
                  image={guitar.image}
                  brand={guitar.brand.toUpperCase()}
                  name={guitar.name.toUpperCase()}
                  color={guitar.color.toUpperCase()}
                  price={"$" + guitar.price}
                  className="py-2 my-2 px-2 mx-2"
                />
              </div>
            ))
          ) : (
            <Spinner message="Loading..." />
          )}
        </div>
      </div>
    </div>
  );
};

export default Guitars;
