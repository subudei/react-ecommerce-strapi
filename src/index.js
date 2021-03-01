import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitalis from "./reportWebVitals";
import ProductsContextProvider from "./context/products-context";

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitalis();

// 58:00
