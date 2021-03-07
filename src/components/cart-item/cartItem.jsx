import React from "react";
import "./cartItem.styles.css";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";

function CartItem(props) {
  const {
    title,
    imageUrl,
    price,
    quantity,
    id,
    description,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = { title, imageUrl, price, quantity, id, description };
  return (
    <div>
      <div className="cart__item__img__container">
        <img className="ci__image" src={imageUrl} alt="cart-item" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>$ {price}</p>
      </div>
      <div className="cart__item__quantity">
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className="cart__item__btns__container">
        <FaPlusCircle onClick={() => increase(product)} />

        {quantity === 1 ? (
          <FaTrash onClick={() => removeProduct(product)} />
        ) : (
          <FaMinusCircle onClick={() => decrease(product)} />
        )}
      </div>
    </div>
  );
}

export default CartItem;
