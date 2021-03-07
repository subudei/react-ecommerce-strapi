import React from "react";
import { useHistory } from "react-router-dom";
import "./cart.styles.css";

import { useCart } from "../../context/cart-context";
import { FaShoppingCart } from "react-icons/fa";

function CartIcon() {
  const history = useHistory();
  const { itemCount, cartItems } = useCart();
  console.log("cartItems:", cartItems);

  return (
    <div className="cart__container" onClick={() => history.push("/cart")}>
      {/* {itemCount > 0 ? ( */}
      <span className="cart__count">{itemCount} </span>
      {/* ) : (
        <span className="cart__count"> 0 </span>
      )} */}

      <FaShoppingCart />
    </div>
  );
}

export default CartIcon;

// 02:11
