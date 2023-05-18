import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Tags = ({ device, size, selected, style, textStyle, text = "News" }) => {
  return (
    <div
      className="tags"
      style={{
        ...{
          backgroundColor:
            selected === "Yes" ? "#20469e" : selected === "No" && device === "Desktop" ? "#ced4e1" : "#ffffff",
          borderRadius: device === "Mobile" ? "40px" : undefined,
          overflow: device === "Mobile" ? "hidden" : undefined,
          padding:
            size === "Big" && device === "Mobile"
              ? "4px 12px"
              : device === "Desktop" && size === "Small"
              ? "0px 8px"
              : "4px 8px",
        },
        ...style,
      }}
    >
      <div
        className="tags-text"
        style={{
          ...{
            color: selected === "Yes" ? "#ffffff" : selected === "No" && device === "Desktop" ? "#395186" : "#9ca8c3",
            fontSize:
              size === "Small" && device === "Mobile"
                ? "14px"
                : device === "Desktop" && size === "Big"
                ? "18px"
                : "16px",
            fontWeight: device === "Desktop" ? "700" : "400",
            lineHeight:
              size === "Big" && device === "Mobile"
                ? "24.3px"
                : device === "Desktop" && size === "Small"
                ? "22.4px"
                : device === "Desktop" && size === "Big"
                ? "23.8px"
                : "17.8px",
          },
          ...textStyle,
        }}
      >
        {text}
      </div>
    </div>
  );
};

Tags.propTypes = {
  device: PropTypes.oneOf(["Mobile", "Desktop"]),
  size: PropTypes.oneOf(["Small", "Big"]),
  selected: PropTypes.oneOf(["Yes", "No"]),
  text: PropTypes.string,
};
