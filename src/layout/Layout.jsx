import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout ">
      <Navbar />
      <Header />
      <main className="bg-yellow-50">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
