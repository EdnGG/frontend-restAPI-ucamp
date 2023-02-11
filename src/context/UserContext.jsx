import { useState, useEffect, createContext } from "react";
import clientAxios from "../components/config/axios.js";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: null,
    email: null,
  });
  const [userEmail, setUserEmail] = useState(null);
  const [authStatus, setAuthStatus] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [selectedObjects, setSelectedObjects] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* */
  const handleCheckboxes = (e, props) => {
    const checked = e.target.checked;
    console.log("checked: ", checked);
    setSelectedObjects(
      checked
        ? [...selectedObjects, props]
        : selectedObjects.filter(
            (selectedObject) => selectedObject.name !== props.name
          )
    );
  };

  useEffect(() => {
    if (selectedObjects.length === 0) {
      localStorage.removeItem("list");
    } else {
      localStorage.setItem("list", JSON.stringify(selectedObjects));
    }
  }, [selectedObjects]);

  /* */

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");
    // const token2 = JSON.stringify(localStorage.getItem("token") || "");
    // console.log("Token 2", token2);
    // token llega como [object Object]
    console.log("token from verifyingToken: ", token);
    if (token) {
      console.log("token true from verifyingToken: ", token);
      // Asignamos el token a la cabecera de la petición
      clientAxios.defaults.headers.common["x-auth-token"] = token;
    } else {
      // Si no hay token, se elimina la cabecera de la petición
      delete clientAxios.defaults.headers.common["x-auth-token"];
    }
    try {
      // Crear esta ruta en el backend para verificar el token
      const res = token && (await clientAxios.get("/user/verify"));
      console.log("res from verifyingToken: ", res);
      // localStorage.setItem("token", res);
      // Tenemos data del usuario si el token es válido
      setUser(res.data);
      // Si el token es válido, se cambia el estado de authStatus a true
      setAuthStatus(true);
    } catch (err) {
      console.log("Error on verifying token: ", err.message);
    }
  };

  const registerUser = async (dataForm, navigate) => {
    try {
      await clientAxios
        .post("/user/signup", dataForm)
        .then((response) => {
          console.log("Response: ", response.data.token);
          localStorage.setItem("token", response.data.token);
          setAuthStatus(true);
          navigate("/profile");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  const loginUser = async (dataForm, navigate) => {
    try {
      await clientAxios
        .post("/user/login", dataForm)
        .then((response) => {
          // const getEmail = response.config.data;
          // const mail = Object.values(getEmail);
          // Object.entries(getEmail).forEach(([key, value]) => {
          //   console.log(`${key}: ${value}`);
          //   if (key === "email") {
          //     localStorage.setItem("email", value);
          //     setUserEmail(value);
          //   }
          // });
          // console.log("Email: ", mail);
          console.log("Response: ", response.config.data);
          console.log(
            "Antes de guardar el token: ",
            localStorage.getItem("token")
          );

          localStorage.setItem("token", JSON.stringify(response.data.token));
          console.log(
            "Después de guardar el token: ",
            localStorage.getItem("token")
          );
          setAuthStatus(true);
          // setUserEmail(response.config.data);
          // setUser({
          //   name: response.data.user.name,
          //   email: response.data.user.email,
          // });
          navigate("/profile");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setAuthStatus(false);
  };

  const data = {
    registerUser,
    loginUser,
    handleChange,
    verifyingToken,
    logout,
    user,
    userEmail,
    authStatus,
    formData,
    handleCheckboxes,
    selectedObjects,
    setSelectedObjects,
    // loginData,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNWMwN2JlMzdkYjhlYjJhZGJlMjYyIn0sImlhdCI6MTY3NTQ3Nzk2NSwiZXhwIjoxNjc1NTY0MzY1fQ.0_mg4U2nFMReWKL5iW_8S3MIN5b769yXdenA6CRCy20"
