import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";
import Cart from "../cart/cart";

function Header() {
  return (
    <div className="nav__container">
      <div>
        <Link className="nav__logo" to="/">
          SHOP
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
      <Cart />
    </div>
  );
}

export default Header;
