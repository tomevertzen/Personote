import React from "react";
import { useAuth } from "./src/context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const ProtectedRoutes = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (currentUser === undefined) {
    return <ClipLoader />;
  }

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
