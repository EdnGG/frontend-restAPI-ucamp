import React, { useEffect, useState } from "react";
import { ButtonPayPal } from "../components/paypal/PayPalButton";
import Card from "../components/core/Card";

const PayPal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const datos = localStorage.getItem("list");
    console.log(datos);
    if (datos) {
      setData(JSON.parse(datos));
    }
  }, []);

  const amount = "20";

  return (
    <div className="container justify-content-center align-items-center">
      <h1 className="my-4 py-4">PayPal</h1>
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        {data.map((guitar, index) => (
          <Card
            key={index}
            image={guitar.image}
            title={guitar.brand + " " + guitar.name}
            description={guitar.color + " - " + guitar.price}
            className="p-4 m-4 bl-light"
          />
        ))}
      </div>

      <div className="mt-3 pt-3 mb-5 pb-5 container justify-content-center align-items-center">
        <ButtonPayPal currency={"USD"} showSpinner={false} amount={amount} />
      </div>
    </div>
  );
};

export default PayPal;
