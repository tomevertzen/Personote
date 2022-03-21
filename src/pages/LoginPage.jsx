import React from "react";
import Login from "../components/Login";
import Banner from "../components/Banner";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-2 grid-rows-1">
      <Banner />
      <Login />
    </div>
  );
};

export default LoginPage;
