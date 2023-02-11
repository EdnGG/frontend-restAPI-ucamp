import "./App.css";
import React, { useState, useContext } from "react";
import { Routes, Route, Switch } from "react-router-dom";
import { UserContext } from "./context/UserContext";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Guitars from "./pages/Guitars";
import Profile from "./pages/Profile";
import Success from "./pages/Success";
import PayPal from "./pages/PayPal";
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  // const [user, setUser] = useState(null);

  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  // Necesito darle un valor a user porque  la info viene dentro del token
  // y no puedo acceder a ella hasta que el usuario se loguee
  // por eso le doy un valor hardcodeado

  return (
    <>
      {/* <UserContext.Provider value={{ user, setUser }}> */}
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/guitars" element={<Guitars />} />
          <Route element={<PrivateRoute />}>
            {/* <UserContext.Provider value={{ user, setUser }}> */}
            <Route path="/paypal" element={<PayPal />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/success" element={<Success />} />
            {/* </UserContext.Provider> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;

// import "./App.css";
// import React, { useState } from "react";
// import { Route, Outlet } from "react-router-dom";
// import { UserContext } from "./context/UserContext";
// import Layout from "./layout/Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import SignIn from "./pages/SignIn";
// import NotFound from "./pages/NotFound";
// import Guitars from "./pages/Guitars";
// import Profile from "./pages/Profile";
// import Paypal from "./components/Paypal";
// import PrivateRoute from "./components/auth/PrivateRoute";

// function App() {
//   const [user, setUser] = useState(null);
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       <Layout>
//         <Outlet>
//           <Route exact path="/" component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/signin" component={SignIn} />
//           <Route path="/guitars" component={Guitars} />
//           <PrivateRoute path="/paypal" component={Paypal} />
//           <PrivateRoute path="/profile" component={Profile} />
//           <Route component={NotFound} />
//         </Outlet>
//       </Layout>
//     </UserContext.Provider>
//   );
// }

// export default App;
