import React from "react";
import { withRouter } from "react-router-dom";
import {
  useProduct,
  useState,
  useEffect,
} from "../../context/products-context";
import Layout from "../layout/layout";

function SingleProduct({ match, history: { push } }) {
  const { products } = useProduct();
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    if (!product) {
      return push("/shop");
    }
    setProduct(product);
  }, []);
  const { imageUrl, title, description, price } = product;
  return (
    <Layout>
      <div>
        <div>
          <img src={imageUrl} alt="product" />
        </div>
        <div>
          <div>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div>
            <button>ADD TO CART</button>
            <button>PROCIDE TO CHECKOUT</button>
          </div>
          <div>{description}</div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleProduct;
