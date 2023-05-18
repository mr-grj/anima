import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Check = ({ stroke, style, vectorStyle, vector = "/img/vector-122.png" }) => {
  return (
    <div className="check" style={style}>
      <img
        className="check-vector"
        style={vectorStyle}
        alt={"Vector"}
        src={stroke === "Med" ? vector : stroke === "Thin" ? "/img/vector-123.png" : "/img/vector-121.png"}
      />
    </div>
  );
};

Check.propTypes = {
  stroke: PropTypes.oneOf(["Bold", "Med", "Thin"]),
  vector: PropTypes.string,
};
