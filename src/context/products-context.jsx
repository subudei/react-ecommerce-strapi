import React, { useContext, useState } from "react";
import SHOP_DATA from "../shop";

const ProductsContext = React.createContext();

export function useProduct() {
  return useContext(ProductsContext);
}

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
