import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as bootstrap from "bootstrap"; // Linea importante para componentres de bootstrap
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import reportWebVitals from "./reportWebVitals";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <PayPalScriptProvider
          option={{
            "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
          }}
        >
          <App />
        </PayPalScriptProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
