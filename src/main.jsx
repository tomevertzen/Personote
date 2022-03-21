import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<LoginPage />} />
      </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
