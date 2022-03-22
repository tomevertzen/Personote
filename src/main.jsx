import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "../ProtectedRoutes";
import Layout from "./layout/Layout";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Router>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Router>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
