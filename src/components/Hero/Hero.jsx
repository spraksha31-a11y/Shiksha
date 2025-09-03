import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container ">
      <div className="hero-text">
        <h1>Welcome to Our Campus</h1>
        <p>Explore our programs and join us in shaping the future.</p>
        <button className="btn">
          Learn More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
