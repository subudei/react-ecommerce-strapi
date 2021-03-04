import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitalis from "./reportWebVitals";
import ProductsContextProvider from "./context/products-context";
import CartContextProvider from "./context/cart-context";

ReactDOM.render(
  <BrowserRouter>
    <CartContextProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </CartContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitalis();
