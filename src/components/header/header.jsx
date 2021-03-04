import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cartIcon.jsx";

function Header() {
  return (
    <div className="nav__container">
      <div>
        <Link className="nav__logo" to="/">
          PRO BOXING GEAR STORE
        </Link>
      </div>
      <ul className="nav__list">
        <li>
          <Link className="nav__list__item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__list__item" to="/shop">
            Shop
          </Link>
        </li>
      </ul>
      <CartIcon />
    </div>
  );
}

export default Header;
