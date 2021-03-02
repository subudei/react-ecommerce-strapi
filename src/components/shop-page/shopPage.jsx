import React, { useContext } from "react";
import "./shopPage.styles.css";

import { useProduct } from "../../context/products-context";
import Layout from "../layout/layout";
import ProductCard from "../product-card/productCard";

function ShopPage() {
  const { products } = useProduct();
  const allProducts = products.map((product) => (
    <ProductCard {...product} key={product.id} />
  ));
  return (
    <Layout>
      <div className="product__list__container">
        <h2 className="product__list__title">Shop</h2>
        <div className="product__list">{allProducts}</div>
      </div>
    </Layout>
  );
}

export default ShopPage;
