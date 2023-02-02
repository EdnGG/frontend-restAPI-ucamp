import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
// import Card from "../components/core/Card";

const Profile = () => {
  const { user } = useContext(UserContext);
  // console.log(user);
  return (
    <div className="container py-5" style={{ height: "100%" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4">
          {/* <Card
          image="https://picsum.photos/700/700"
          title="Eden Gomez"
          description="Email: gresseden@gmail.com"
        /> */}
          <img
            src="https://picsum.photos/700/700"
            className="rounded img-fluid mb-3"
            alt="Profile"
          />
          {/* <h3>{user.username}</h3> */}
          {/* <p>{user.email}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
