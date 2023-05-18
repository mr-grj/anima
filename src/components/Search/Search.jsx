import React from "react";
import PropTypes from "prop-types";
import { Cross } from "../Cross";
import { Magnifier } from "../Magnifier";
import "./style.css";

export const Search = ({ device, status, style, magnifierVector = "/img/vector-55.png", text = "Search" }) => {
  return (
    <div className="search" style={style}>
      <div
        className={`input ${status === "Error" && "error"} ${status === "Hightlight" && "hightlight"} ${
          status === "Typing" && "typing"
        } ${status === "Disabled" && "disabled"} ${status === "Filled" && "default"} ${
          status === "Default" && "default"
        }`}
      >
        <Magnifier
          stroke="Med"
          style={
            status === "Typing"
              ? {
                  height: "24px",
                  minWidth: "24px",
                  width: "unset",
                }
              : {
                  height: "24px",
                  minWidth: "24px",
                  opacity: "0.9",
                  width: "unset",
                }
          }
          vector={
            status === "Error"
              ? "/img/vector-71.png"
              : status === "Default" || status === "Disabled"
              ? magnifierVector
              : "/img/vector-57.png"
          }
          vectorStyle={{
            height: "14px",
            left: "5px",
            top: "5px",
            width: "14px",
          }}
        />
        <>
          {(status === "Default" || status === "Disabled" || status === "Error") && (
            <>
              <div
                className="placeholder-text"
                style={{
                  color:
                    status === "Error"
                      ? "#c52e48"
                      : status === "Default" && device === "Desktop"
                      ? "#6b7da4"
                      : "#9ca8c3",
                  fontSize: device === "Mobile" ? "16px" : "18px",
                  lineHeight: device === "Mobile" ? "24.3px" : "23.8px",
                  marginTop: status === "Disabled" ? "-1.00px" : "-2.00px",
                }}
              >
                <>
                  {status === "Error" && <>Something typed</>}

                  {status === "Default" && <>{text}</>}

                  {status === "Disabled" && <>Placeholder</>}
                </>
              </div>
            </>
          )}

          {(status === "Filled" || status === "Hightlight" || status === "Typing") && (
            <>
              <div
                className="search-div-2"
                style={{
                  alignItems: status === "Typing" ? "flex-start" : undefined,
                  color: status === "Filled" || status === "Hightlight" ? "#082668" : undefined,
                  display: status === "Typing" ? "flex" : undefined,
                  fontFamily: status === "Filled" || status === "Hightlight" ? "'Poppins', Helvetica" : undefined,
                  fontSize:
                    device === "Desktop" && (status === "Filled" || status === "Hightlight")
                      ? "18px"
                      : device === "Mobile" && (status === "Filled" || status === "Hightlight")
                      ? "16px"
                      : undefined,
                  fontWeight: status === "Filled" || status === "Hightlight" ? "400" : undefined,
                  letterSpacing: status === "Filled" || status === "Hightlight" ? "0" : undefined,
                  lineHeight:
                    device === "Desktop" && (status === "Filled" || status === "Hightlight")
                      ? "23.8px"
                      : device === "Mobile" && (status === "Filled" || status === "Hightlight")
                      ? "24.3px"
                      : undefined,
                  marginTop: status === "Filled" || status === "Hightlight" ? "-2.00px" : undefined,
                  whiteSpace: status === "Filled" || status === "Hightlight" ? "nowrap" : undefined,
                }}
              >
                <>
                  {(status === "Filled" || status === "Hightlight") && <>Something typed</>}

                  {status === "Typing" && (
                    <>
                      <div className={`search-text-wrapper ${device === "Desktop" ? "desktop" : "class"}`}>
                        Typing something
                      </div>
                      <div className="search-line" />
                    </>
                  )}
                </>
              </div>
              <Cross
                img="/img/vector-58.png"
                stroke="Med"
                style={{
                  height: "24px",
                  minWidth: "24px",
                  width: "unset",
                }}
                vectorStyle={{
                  height: "13px",
                  left: "5px",
                  top: "5px",
                  width: "13px",
                }}
              />
            </>
          )}
        </>
      </div>
      <>
        {status === "Error" && (
          <>
            <div className="error-message">
              <div className={`error-message-1707-22134 ${device === "Desktop" ? "desktop-error-message" : "class-2"}`}>
                Error message
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
};

Search.propTypes = {
  device: PropTypes.oneOf(["Mobile", "Desktop"]),
  status: PropTypes.oneOf(["Disabled", "Filled", "Typing", "Error", "Hightlight", "Default"]),
  magnifierVector: PropTypes.string,
  text: PropTypes.string,
};
