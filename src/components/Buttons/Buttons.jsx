import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";

export const Buttons = ({ device, type, status, size, style, labelStyle, text = "Button text", to }) => {
  return (
    <Link
      className="buttons"
      style={{
        ...{
          backgroundColor:
            status === "Default" && type === "Primary"
              ? "#da4562"
              : type === "Primary" && (status === "Focus" || status === "Hover")
              ? "#c4405d"
              : status === "Disabled" && (type === "Primary" || type === "Secondary")
              ? "#ced4e1"
              : status === "Error" && (type === "Primary" || type === "Secondary")
              ? "#c52e48"
              : status === "Default" && type === "Secondary"
              ? "#20469e"
              : type === "Secondary" && (status === "Focus" || status === "Hover")
              ? "#163888"
              : undefined,
          border: type === "Negative" ? "2px solid" : undefined,
          borderColor:
            type === "Negative" &&
            (size === "Big" || status === "Disabled") &&
            (status === "Default" || status === "Focus" || status === "Hover" || status === "Disabled")
              ? "#ced4e1"
              : size === "Small" &&
                type === "Negative" &&
                (status === "Default" || status === "Focus" || status === "Hover")
              ? "#da4562"
              : type === "Negative" && status === "Error"
              ? "#c52e48"
              : undefined,
          borderRadius: type === "Negative" || type === "Primary" || type === "Secondary" ? "8px" : undefined,
          justifyContent: type === "Negative" || type === "Primary" || type === "Secondary" ? "center" : undefined,
          padding:
            size === "Big" && (type === "Negative" || type === "Primary" || type === "Secondary")
              ? "12px 32px"
              : size === "Small" && (type === "Negative" || type === "Primary" || type === "Secondary")
              ? "4px 16px"
              : undefined,
        },
        ...style,
      }}
      to={to}
    >
      <div
        className="label"
        style={{
          ...{
            color:
              status === "Disabled" &&
              (device === "Mobile" || size === "Small") &&
              (type === "Primary" || type === "Secondary") &&
              (device === "Desktop" || device === "Mobile" || type === "Secondary") &&
              (size === "Small" || size === "Big" || type === "Primary")
                ? "#9ca8c3"
                : status === "Default" && type === "Negative" && size === "Big"
                ? "#6b7da4"
                : (size === "Small" || status === "Default") &&
                  (size === "Small" || type === "Primary link") &&
                  (status === "Default" || type === "Negative") &&
                  (type === "Negative" || type === "Primary link") &&
                  (status === "Default" || status === "Focus" || status === "Hover")
                ? "#da4562"
                : size === "Big" && type === "Negative" && (status === "Focus" || status === "Hover")
                ? "#082668"
                : status === "Disabled" && (type === "Negative" || type === "Primary link" || type === "Secondary link")
                ? "#ced4e1"
                : status === "Error" && (type === "Negative" || type === "Primary link" || type === "Secondary link")
                ? "#c52e48"
                : type === "Primary link" && (status === "Focus" || status === "Hover")
                ? "#c4405d"
                : status === "Default" && type === "Secondary link"
                ? "#20469e"
                : type === "Secondary link" && (status === "Focus" || status === "Hover")
                ? "#163888"
                : "#ffffff",
            fontSize:
              device === "Desktop" && size === "Big"
                ? "18px"
                : size === "Small" && device === "Mobile"
                ? "14px"
                : "16px",
            lineHeight:
              size === "Big" && device === "Mobile"
                ? "24.3px"
                : device === "Desktop" && size === "Small"
                ? "22.4px"
                : size === "Small" && device === "Mobile"
                ? "17.8px"
                : "23.8px",
            marginTop: type === "Primary" || type === "Secondary" ? "-1.00px" : "-2.00px",
          },
          ...labelStyle,
        }}
      >
        {text}
      </div>
    </Link>
  );
};

Buttons.propTypes = {
  device: PropTypes.oneOf(["Mobile", "Desktop"]),
  type: PropTypes.oneOf(["Primary", "Negative", "Secondary link", "Primary link", "Secondary"]),
  status: PropTypes.oneOf(["Focus", "Disabled", "Error", "Default", "Hover"]),
  size: PropTypes.oneOf(["Small", "Big"]),
  text: PropTypes.string,
  to: PropTypes.string,
};
