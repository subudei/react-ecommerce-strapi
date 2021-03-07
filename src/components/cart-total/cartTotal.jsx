import React from "react";
import "./cartTotal.styles.css";
import { useHistory } from "react-router-dom";

function CartTotal({ itemCount, total, clearCart }) {
  const history = useHistory();
  return (
    <div className="total__container">
      <div className="total">
        <p>Total Items: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
      </div>
      <div className="checkout">
        <button
          className="btn__checkout"
          onClick={() => history.push("/checkout")}
        >
          CHECKOUT
        </button>
        <button
          className="btn__clear"
          onClick={() => {
            clearCart();
          }}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default CartTotal;
