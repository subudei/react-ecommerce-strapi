import React from "react";
import "./footer.styles.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer__container">{year} © PRO BOXING GEAR STORE</div>
  );
}

export default Footer;
