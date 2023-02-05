import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export const ButtonPayPal = ({ currency, showSpinner, amount }) => {
  const navigate = useNavigate();

  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  // const amount = "2";
  const style = { layout: "vertical" };

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderID) => {
              console.log("Order ID: ", orderID);
              return orderID;
            })
            .catch((error) => {
              console.log("Error: ", error.message);
            });
        }}
        onApprove={function (data, actions) {
          return actions.order
            .capture()
            .then(function () {
              console.log("Aprove: ", data);
              navigate("/success");
            })
            .catch((error) => {
              console.log("Error: ", error.message);
              navigate("/notfound");
            });
        }}
      />
    </>
  );
};
