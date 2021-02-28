import React from "react";
import "./hero.styles.css";
// import HeroImg from "../../assets/slideshow_3.webp";

function Hero() {
  return (
    <div className="hero__container">
      <h1 className="hero__title">The Authentic Boxing Equipment.</h1>
      <div className="hero__btn_div">
        <button className="hero__btn">SHOP NOW</button>
      </div>
      {/* <img src={HeroImg} alt="Boxing_gear" className="hero__img" /> */}
    </div>
  );
}

export default Hero;
