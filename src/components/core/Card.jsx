// import React from "react";
// import { UserContext } from "../../context/UserContext";

// const Card = (props) => {

//   const { setSelectedObject } = useContext(UserContext);

//   const handleCheckboxes = (e) => {
//     setSelectedObject({ ...props });
//   };

//   return (
//     <div
//       className="card p-5 m-5 justify-content-center align-items-center"
//       style={{ width: "25%" }}
//     >
//       <img
//         src={props.image}
//         className="rounded-3"
//         alt="Guitars"
//         style={{ width: "100%" }}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{props.title}</h5>
//         <p className="card-text">{props.description}</p>

//         <div className="form-check form-switch">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             id="flexSwitchCheckChecked"
//             onChange={(e) => props.handleCheckboxes(e)}
//           />
//           <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
//             Add to Cart
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Card = (props) => {
  const { selectedObjects, setSelectedObjects } = useContext(UserContext);

  const handleCheckboxes = (e) => {
    // console.log(e);
    // setSelectedObjects({ ...props });
    setSelectedObjects([...selectedObjects, props]);

    localStorage.setItem("list", JSON.stringify(selectedObjects));
    console.log("Guitar selected: ", selectedObjects);
  };

  return (
    <div
      className="card p-5 m-5 justify-content-center align-items-center"
      style={{ width: "25%" }}
    >
      <img
        src={props.image}
        className="rounded-3"
        alt="Guitars"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            onChange={handleCheckboxes}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Add to Cart
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
