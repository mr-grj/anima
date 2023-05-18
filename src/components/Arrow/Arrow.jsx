import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Arrow = ({
  type,
  stroke,
  style,
  vectorStyle,
  vector = "/img/vector-32.png",
  img = "/img/vector-34.png",
}) => {
  return (
    <div className="arrow" style={style}>
      <img
        className="arrow-img"
        style={vectorStyle}
        alt={"Vector"}
        src={
          stroke === "Thin" && type === "Arrow Left"
            ? "/img/vector-31.png"
            : stroke === "Bold" && type === "Arrow Left"
            ? vector
            : type === "Arrow Right" && stroke === "Med"
            ? "/img/vector-33.png"
            : stroke === "Bold" && type === "Arrow Right"
            ? img
            : type === "Arrow Right" && stroke === "Thin"
            ? "/img/vector-35.png"
            : type === "Arrow Bottom" && stroke === "Med"
            ? "/img/vector-36.png"
            : stroke === "Thin" && type === "Arrow Bottom"
            ? "/img/vector-37.png"
            : stroke === "Bold" && type === "Arrow Bottom"
            ? "/img/vector-38.png"
            : type === "Arrow Up" && stroke === "Med"
            ? "/img/vector-39.png"
            : type === "Arrow Up" && stroke === "Bold"
            ? "/img/vector-40.png"
            : type === "Arrow Up" && stroke === "Thin"
            ? "/img/vector-41.png"
            : "/img/vector-30.png"
        }
      />
    </div>
  );
};

Arrow.propTypes = {
  type: PropTypes.oneOf(["Arrow Right", "Arrow Up", "Arrow Bottom", "Arrow Left"]),
  stroke: PropTypes.oneOf(["Bold", "Med", "Thin"]),
  vector: PropTypes.string,
  img: PropTypes.string,
};
