import React from "react";
import "./cart.styles.css";

import { useCart } from "../../context/cart-context";
import { FaShoppingCart } from "react-icons/fa";

function CartIcon() {
  const { itemCount } = useCart();

  return (
    <div className="cart__container">
      {itemCount > 0 ? (
        <span className="cart__count">{itemCount} </span>
      ) : (
        <span className="cart__count"> 0 </span>
      )}

      <FaShoppingCart />
    </div>
  );
}

export default CartIcon;

// 02:11
