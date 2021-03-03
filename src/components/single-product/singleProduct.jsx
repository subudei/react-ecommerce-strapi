import React, { useState, useEffect } from "react";
import "./singleProduct.styles.css";

import { useParams, useHistory } from "react-router-dom";
import { useProduct } from "../../context/products-context";

import Layout from "../layout/layout";

function SingleProduct() {
  const { products } = useProduct();
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    if (!product) {
      return history.push("/shop");
      // return history.goBack();
    }
    setProduct(product);
  }, [id, product, products]);

  if (!product) {
    return null;
  }
  const { imageUrl, title, description, price } = product;
  return (
    <Layout>
      <div className="single__product__container">
        <div className="single__product__image__div">
          <img
            src={imageUrl}
            alt="product"
            className="single__product__image"
          />
        </div>
        <div className="single__product__details">
          <div className="single__product__name_price">
            <h1>{title}</h1>
            <h3>$ {price}</h3>
          </div>
          <div className="single__product__buttons">
            <button className="sp__btn">ADD TO CART</button>
            <button className="sp__btn">PROCIDE TO CHECKOUT</button>
          </div>
          <div className="single__product__description">{description}</div>
        </div>
      </div>
    </Layout>
  );
}

// export default withRouter(SingleProduct);
export default SingleProduct;
