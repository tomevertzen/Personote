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
import Companies from "./pages/Companies";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Router>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="companies" element={<Companies />} />
            <Route path="settings" element={<Settings />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="tasks" element={<Tasks />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Router>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
