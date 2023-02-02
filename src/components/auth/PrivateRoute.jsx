import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const userCtx = useContext(UserContext);

  const { authStatus, verifyingToken } = userCtx;

  useEffect(() => {
    verifyingToken();
  }, []);
  // Al hacer refresh en la página, el useEffect se ejecuta y verifica el token, pero el componente PrivateRoute se renderiza antes de que se ejecute el useEffect, por lo que authStatus es undefined, por lo que se renderiza el componente <Navigate to="/login" replace />. Para evitar esto, se puede hacer que el componente PrivateRoute no se renderice hasta que se ejecute el useEffect, para esto se puede usar el operador ternario, y se puede usar el operador lógico && para que no se renderice nada si authStatus es undefined.
  // return authStatus ? <Outlet /> : <Navigate to="/login" replace />;
  return authStatus && <Outlet />;
}
