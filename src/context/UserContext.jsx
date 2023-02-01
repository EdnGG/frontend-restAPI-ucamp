import { useState, createContext } from "react";
import clientAxios from "../components/config/axios.js";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: null, email: null });
  const [authStatus, setAuthStatus] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // e.preventDafault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      clientAxios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete clientAxios.defaults.headers.common["x-auth-token"];
    }
    try {
      // Crear esta ruta en el backend para verificar el token
      const res = token && (await clientAxios.get("/user/verify"));
      setUser(res.data);
      setAuthStatus(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const registerUser = async (dataForm, navigate) => {
    // const navigate = useNavigate();
    try {
      console.log(`DataForm: ${dataForm}`);
      const res = await clientAxios.post("/user/signup", dataForm);
      localStorage.setItem("token", res.data.token);
      setAuthStatus(true);
      navigate("/profile");
      // return true;
    } catch (err) {
      console.log(err.message);
    }
  };

  const loginUser = async (dataForm, navigate) => {
    // debugger;
    // const navigate = useNavigate();
    try {
      console.log(`DataForm: ${dataForm}`);
      await clientAxios.post("/user/login", dataForm).then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuthStatus(true);
        navigate("/profile");
      });
      // console.log(res.data);
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
    authStatus,
    formData,
    loginData,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
