import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthContext } from "./components/Store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const localStorageStatus = localStorage.getItem("isLoggedIn");

  // useEffect(() => {
  //   if (localStorageStatus === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.setItem("isLoggedIn", "0");
  //   setIsLoggedIn(false);
  // };
  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Provider
    //   value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    // >
    <>
      <MainHeader /*isAuthenticated={isLoggedIn} onLogout={logoutHandler}*/ />
      <main>
        {!ctx.isLoggedIn && <Login /*onLogin={loginHandler}*/ />}
        {ctx.isLoggedIn && <Home /*onLogout={logoutHandler}*/ />}
      </main>
    </>
    // </AuthContext.Provider>
  );
}

export default App;
