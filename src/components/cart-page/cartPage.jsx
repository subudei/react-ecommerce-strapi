import React from "react";
import Layout from "../layout/layout";
import CartItem from "../cart-item/cartItem";
import { useCart } from "../../context/cart-context";
import "./cartPage.styles.css";
import CartTotal from "../cart-total/cartTotal";

function CartPage() {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useCart();
  const functions = { increase, decrease, removeProduct, clearCart };
  return (
    <Layout>
      <>
        {/* <h1>Cart</h1> */}
        {cartItems.length === 0 ? (
          <div className="cart__page__empty__cart">
            <h1>Your Cart is empty</h1>
          </div>
        ) : (
          <>
            <div className="cart__page">
              <div className="cart__page__container">
                {cartItems.map((item) => (
                  <CartItem {...item} key={item.id} {...functions} />
                ))}
              </div>
            </div>
            <CartTotal
              itemCount={itemCount}
              total={total}
              clearCart={clearCart}
            />
          </>
        )}
      </>
    </Layout>
  );
}

export default CartPage;
