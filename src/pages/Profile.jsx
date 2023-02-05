import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  // const { userEmail } = useContext(UserContext);
  // console.log(userEmail);
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4">
          <img
            src="https://picsum.photos/700/700"
            className="rounded img-fluid mb-3"
            alt="Profile"
          />
          <div className="card mt-3">
            {/* <div className="card-body">
              <h3 className="card-title">{user.usuario.name}</h3>
              <p className="card-text">{user.usuario.email}</p>
            </div> */}
          </div>
          {/* {user ? (
            <div className="card mt-3">
              <div className="card-body">
                <h3 className="card-title">{user.usuario.name}</h3>
                <p className="card-text">{user.usuario.email}</p>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
