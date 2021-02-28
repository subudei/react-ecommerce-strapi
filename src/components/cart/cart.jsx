import React from "react";
import "./cart.styles.css";

import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  return (
    <div className="cart__container">
      <span className="cart__count"> 0 </span>
      <FaShoppingCart />
    </div>
  );
}

export default Cart;
