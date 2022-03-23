import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return <button onClick={handleLogOut}>Uitloggen</button>;
};

export default Dashboard;
