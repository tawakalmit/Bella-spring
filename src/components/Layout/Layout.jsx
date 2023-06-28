import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
      <main>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
