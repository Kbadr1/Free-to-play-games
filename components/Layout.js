import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {/* <Header /> */}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
