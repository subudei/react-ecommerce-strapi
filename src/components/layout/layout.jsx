import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout__main">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
