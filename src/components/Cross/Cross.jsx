import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Cross = ({ stroke, style, vectorStyle, vector = "/img/vector-97.png", img = "/img/vector-98.png" }) => {
  return (
    <div className="cross" style={style}>
      <img
        className="vector"
        style={vectorStyle}
        alt={"Vector"}
        src={stroke === "Med" ? img : stroke === "Thin" ? "/img/vector-99.png" : vector}
      />
    </div>
  );
};

Cross.propTypes = {
  stroke: PropTypes.oneOf(["Bold", "Med", "Thin"]),
  vector: PropTypes.string,
  img: PropTypes.string,
};
