import React from "react";
import { useAuth } from "./src/context/AuthContext";
import LoginPage from "./src/pages/LoginPage";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
