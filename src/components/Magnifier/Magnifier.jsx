import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Magnifier = ({ stroke, style, vectorStyle, vector = "/img/vector-79.png" }) => {
  return (
    <div className="magnifier" style={style}>
      <img
        className="img"
        style={vectorStyle}
        alt={"Vector"}
        src={
          stroke === "Bold"
            ? "/img/vector-78.png"
            : stroke === "Med"
            ? vector
            : stroke === "Thin"
            ? "/img/vector-80.png"
            : "/img/vector-77.png"
        }
      />
    </div>
  );
};

Magnifier.propTypes = {
  stroke: PropTypes.oneOf(["Fill", "Bold", "Med", "Thin"]),
  vector: PropTypes.string,
};
