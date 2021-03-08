import React, { useContext, useReducer } from "react";
import cartReducer, { sumItems } from "./cartReducer";

const CartContext = React.createContext();

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export function useCart() {
  return useContext(CartContext);
}

const initialState = {
  cartItems: cartFromStorage,
  ...sumItems(cartFromStorage),
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addProduct = (product) =>
    dispatch({ type: "ADD_ITEM", payload: product });
  const increase = (product) =>
    dispatch({ type: "INCREASE", payload: product });
  const decrease = (product) =>
    dispatch({ type: "DECREASE", payload: product });
  const removeProduct = (product) =>
    dispatch({ type: "REMOVE_PRODUCT", payload: product });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    removeProduct,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
