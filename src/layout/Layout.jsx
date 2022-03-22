import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <Header />
      <main className="bg-sky-400">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
