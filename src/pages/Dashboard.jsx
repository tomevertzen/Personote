import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";

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

  return (
    <Layout>
      <button onClick={handleLogOut}>Uitloggen</button>
    </Layout>
  );
};

export default Dashboard;
