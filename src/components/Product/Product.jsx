import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Product = ({ device, style, vector = "/img/vector-128-10.png" }) => {
  return (
    <div className={`product ${device === "Mobile" ? "mobile-device-mobile" : "class-11"}`} style={style}>
      <img
        className={`product-vector ${device === "Mobile" ? "mobile" : "class"}`}
        alt={"Vector"}
        src={device === "Desktop" ? vector : "/img/vector-128-20.png"}
      />
      <div className={`product-copy ${device === "Mobile" ? "mobile-copy" : "class-3"}`}>
        <div className={`product-text-wrapper ${device === "Mobile" ? "mobile-fat" : "class-2"}`}>0.28</div>
        <div className={`div ${device === "Mobile" ? "mobile-fat" : "class-2"}`}>Protein</div>
      </div>
      <div className={`product-copy ${device === "Mobile" ? "mobile-div" : "class-4"}`}>
        <div className={`product-text-wrapper ${device === "Mobile" ? "mobile-fat" : "class-2"}`}>Buffalo</div>
        <div className={`div ${device === "Mobile" ? "mobile-fat" : "class-2"}`}>Main ingredient</div>
      </div>
      <div className={`product-copy-2 ${device === "Mobile" ? "mobile-2" : "class-5"}`}>
        <div className={`product-text-wrapper ${device === "Mobile" ? "mobile-fat" : "class-2"}`}>0.05</div>
        <div className={`div ${device === "Mobile" ? "mobile-fat" : "class-2"}`}>Fibre</div>
      </div>
      <div className={`product-copy-2 ${device === "Mobile" ? "mobile-3" : "class-6"}`}>
        <div className={`product-text-wrapper ${device === "Mobile" ? "mobile-fat" : "class-2"}`}>0.17</div>
        <div className={`div ${device === "Mobile" ? "mobile-fat" : "class-2"}`}>Fat</div>
      </div>
      <div className={`product-img ${device === "Mobile" ? "mobile-img" : "class-8"}`}>
        <img
          className={`img-2 ${device === "Mobile" ? "mobile-image" : "class-7"}`}
          alt={"Image"}
          src={device === "Desktop" ? "/img/image-3.png" : "/img/image-3-20.png"}
        />
      </div>
      <p
        className={`taste-of-the-wild-hight-prairie-reci ${
          device === "Mobile" ? "mobile-taste-of-the-wild-hight-prairie-reci" : "class-9"
        }`}
      >
        Taste of the wild hight prairie reci...
      </p>
      <div className={`element ${device === "Mobile" ? "mobile-element" : "class-10"}`}>$39.90</div>
    </div>
  );
};

Product.propTypes = {
  device: PropTypes.oneOf(["Mobile", "Desktop"]),
  vector: PropTypes.string,
};
