import React, { useState, useEffect } from "react";
import "./singleProduct.styles.css";

import { useParams, useHistory } from "react-router-dom";
import { useProduct } from "../../context/products-context";
import { useCart } from "../../context/cart-context";
import { isInCart } from "../../helpers";

import Layout from "../layout/layout";

function SingleProduct() {
  const { products } = useProduct();
  const { addProduct, cartItems, increase } = useCart();
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const productInCart = isInCart(product, cartItems);

  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    if (!product) {
      return history.push("/shop");
      // return history.goBack();
    }
    setProduct(product);
  }, [id, product, products, history]);

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
            {!productInCart ? (
              <button onClick={() => addProduct(product)} className="sp__btn">
                ADD TO CART
              </button>
            ) : (
              <button onClick={() => increase(product)} className="sp__btn">
                ADD MORE
              </button>
            )}

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

// 2:51
