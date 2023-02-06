import React, { useEffect, useState } from "react";
import { ButtonPayPal } from "../components/paypal/PayPalButton";
import Card from "../components/core/Card";

// const PayPal = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const datos = localStorage.getItem("list");
//     console.log(datos);
//     if (datos) {
//       setData(JSON.parse(datos));
//     }
//   }, []);

//   const amount = "20";

//   return (
//     <div className="container-fluid justify-content-center align-items-center">
//       <h1 className="my-4 py-4">PayPal</h1>
//       <div className="container d-flex flex-wrap justify-content-center align-items-center">
//         {data.map((datas, index) => (
//           <div className="col-md-4 col-sm-6 mb-4 py-2 my-2 px-2 mx-2">
//             <Card
//               key={index}
//               image={datas.image || ""}
//               title={
//                 (datas.brand &&
//                   datas.brand.toUpperCase() + " " + datas.name.toUpperCase()) ||
//                 ""
//               }
//               description={
//                 (datas.color &&
//                   datas.color.toUpperCase() + " - $" + datas.price) ||
//                 ""
//               }
//               className="py-2 my-2 px-2 mx-2"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="mt-3 pt-3 mb-5 pb-5 container justify-content-center align-items-center">
//         <ButtonPayPal currency={"USD"} showSpinner={false} amount={amount} />
//       </div>
//     </div>
//   );
// };

// export default PayPal;

const PayPal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const datos = localStorage.getItem("list");
    if (datos) {
      try {
        console.log("Si hay datos: ", datos);
        setData(JSON.parse(datos));
      } catch (error) {
        console.error("Error al parsear la cadena JSON:", error);
        setData([]);
      }
    } else {
      console.error(
        "No se encontró ningún item con la clave 'list' en el localStorage"
      );
      setData([]);
    }
  }, []);

  const amount = "20";

  return (
    <div className="container-fluid justify-content-center align-items-center">
      <h1 className="my-4 py-4">PayPal</h1>
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        {data.length > 0 ? (
          data.map((datas, index) => (
            <div className="col-md-4 col-sm-6 mb-4 py-2 my-2 px-2 mx-2">
              <Card
                key={index}
                image={datas.image || ""}
                title={
                  (datas.brand &&
                    datas.brand.toUpperCase() +
                      " " +
                      datas.name.toUpperCase()) ||
                  ""
                }
                description={
                  (datas.color &&
                    datas.color.toUpperCase() + " - $" + datas.price) ||
                  ""
                }
                className="py-2 my-2 px-2 mx-2"
              />
            </div>
          ))
        ) : (
          <div>No hay datos disponibles</div>
        )}
      </div>

      <div className="mt-3 pt-3 mb-5 pb-5 container justify-content-center align-items-center">
        <ButtonPayPal currency={"USD"} showSpinner={false} amount={amount} />
      </div>
    </div>
  );
};

export default PayPal;
