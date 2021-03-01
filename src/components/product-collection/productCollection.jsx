import React, { useContext } from "react";
import "./productCollections.styles.css";

import { ProductsContext } from "../../context/products-context";
import ProductCard from "../product-card/productCard";

function ProductCollection() {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <ProductCard {...product} key={product.id} />);
  return (
    <div className="collection__container">
      <h2 className="collection__title">Product Collections</h2>
      <div className="collection__products">{productItems}</div>
    </div>
  );
}

export default ProductCollection;
