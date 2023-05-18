import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Treat = ({
  property1,
  style,
  unionStyle,
  vector = "/img/vector-54.png",
  img = "/img/vector-48.png",
  union = "/img/union-6.png",
  vector1 = "/img/vector-51.png",
  union1 = "/img/union.png",
  union2 = "/img/union-2.png",
  vector2 = "/img/vector-49.png",
  vector3 = "/img/vector-50.png",
  homeFill = "/img/home-1-fill.png",
  union3 = "/img/union-7.png",
}) => {
  return (
    <div className="treat" style={style}>
      <img
        className={`treat-img ${property1 === "Pet" && "pet"} ${property1 === "Edit" && "treat-home"} ${
          property1 === "Home" && "treat-home"
        } ${property1 === "Results" && "results"} ${property1 === "Dog" && "treat-dog"} ${
          property1 === "Email" && "email"
        } ${property1 === "Account" && "treat-warning"} ${property1 === "Warning" && "treat-warning"} ${
          property1 === "Bag" && "bag"
        } ${property1 === "Close" && "close"} ${property1 === "Kit" && "kit"} ${property1 === "Data" && "data"} ${
          property1 === "Food" && "food"
        } ${property1 === "Customers" && "customers"} ${property1 === "Lock" && "add"} ${
          property1 === "Call" && "add"
        } ${property1 === "Male" && "add"} ${property1 === "Cat" && "add"} ${property1 === "Add" && "add"}`}
        style={unionStyle}
        alt={"Union"}
        src={
          property1 === "Home"
            ? homeFill
            : property1 === "Dog"
            ? "/img/union-5.png"
            : property1 === "Cat"
            ? "/img/vector-46.png"
            : property1 === "Email"
            ? "/img/vector-47.png"
            : property1 === "Lock"
            ? "/img/union-1.png"
            : property1 === "Warning"
            ? img
            : property1 === "Customers"
            ? union3
            : property1 === "Bag"
            ? vector2
            : property1 === "Add"
            ? vector3
            : property1 === "Kit"
            ? vector1
            : property1 === "Call"
            ? union2
            : property1 === "Close"
            ? "/img/vector-52.png"
            : property1 === "Edit"
            ? union
            : property1 === "Results"
            ? "/img/union-3.png"
            : property1 === "Data"
            ? "/img/union-4.png"
            : property1 === "Food"
            ? "/img/vector-53.png"
            : property1 === "Account"
            ? "/img/user-2-fill.png"
            : property1 === "Male"
            ? vector
            : union1
        }
      />
    </div>
  );
};

Treat.propTypes = {
  property1: PropTypes.oneOf([
    "Data",
    "Account",
    "Kit",
    "Bag",
    "Email",
    "Customers",
    "Results",
    "Lock",
    "Warning",
    "Close",
    "Pet",
    "Call",
    "Edit",
    "Male",
    "Dog",
    "Cat",
    "Home",
    "Add",
    "Food",
  ]),
  vector: PropTypes.string,
  img: PropTypes.string,
  union: PropTypes.string,
  vector1: PropTypes.string,
  union1: PropTypes.string,
  union2: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
  homeFill: PropTypes.string,
  union3: PropTypes.string,
};
