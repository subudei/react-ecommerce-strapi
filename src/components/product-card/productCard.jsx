import React from "react";
import { useHistory } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { isInCart } from "../../helpers";
// import "./productCard.styles.css";
import "./productCard.style2.css";

function ProductCard(props) {
  const { title, imageUrl, price, description, id } = props;
  const product = { title, imageUrl, price, description, id };
  const history = useHistory();

  const { addProduct, cartItems, increase } = useCart();
  const productInCart = isInCart(product, cartItems);
  return (
    <div className="card__one__container">
      <div className="card__one" onClick={() => history.push(`/product/${id}`)}>
        {/* <div className="circle__one" /> */}
        <img className="card__one__img" src={imageUrl} alt="product" />
      </div>
      <div className="card__one__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>$ {price}</h4>
        {!productInCart ? (
          <button
            className="card__one__btn"
            onClick={() => addProduct(product)}
          >
            ADD TO CART
          </button>
        ) : (
          <button
            className="card__one__btn__white"
            onClick={() => {
              increase(product);
            }}
          >
            ADD MORE
          </button>
        )}
      </div>
      {/* <img className="card__one__img" src={imageUrl} alt="product" /> */}
    </div>
  );
}

// export default withRouter(ProductCard);
export default ProductCard;
