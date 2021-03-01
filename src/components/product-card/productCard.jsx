import React from "react";
import "./productCard.styles.css";

function ProductCard(product) {
  const { title, imageUrl, price, description } = product;
  return (
    <div className="card__one__container">
      <div className="card__one">
        <div className="circle__one" />
        <div className="card__one__content">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>$ {price}</p>
          <button className="card__one__btn">Buy Now</button>
        </div>
        <img className="card__one__img" src={imageUrl} alt="product" />
      </div>
    </div>
  );
}

export default ProductCard;
