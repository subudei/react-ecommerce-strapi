import React from "react";
import { withRouter } from "react-router-dom";
// import "./productCard.styles.css";
import "./productCard.style2.css";

function ProductCard(props) {
  const { title, imageUrl, price, description, history, id } = props;
  return (
    <div
      className="card__one__container"
      onClick={() => history.push(`/product/${id}`)}
    >
      <div className="card__one">
        {/* <div className="circle__one" /> */}
        <img className="card__one__img" src={imageUrl} alt="product" />
      </div>
      <div className="card__one__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>$ {price}</h4>
        <button className="card__one__btn">Buy Now</button>
      </div>
      {/* <img className="card__one__img" src={imageUrl} alt="product" /> */}
    </div>
  );
}

export default withRouter(ProductCard);
