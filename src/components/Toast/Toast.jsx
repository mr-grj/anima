import React from "react";
import PropTypes from "prop-types";
import { Check } from "../Check";
import { Buttons } from "../Buttons";
import "./style.css";

export const Toast = ({
  type,
  device,
  action,
  style,
  checkVector = "/img/vector-105.png",
  text = "This is an informational toast",
}) => {
  return (
    <div className="toast" style={style}>
      <div className="toast-content">
        <div
          className="toast-icon"
          style={{
            backgroundColor:
              type === "Success"
                ? "#6ec181"
                : type === "Informational"
                ? "#395186"
                : type === "Destructive" && device === "Mobile"
                ? "#c52e48"
                : "#db9f53",
            borderRadius:
              type === "Destructive" ||
              type === "Informational" ||
              type === "Warning" ||
              (device === "Mobile" && type === "Success") ||
              (action === "No" && device === "Desktop" && type === "Success")
                ? "12px"
                : undefined,
          }}
        >
          <>
            {type === "Success" && (
              <>
                <Check
                  stroke="Med"
                  style={{
                    height: "24px",
                    minWidth: "24px",
                    width: "unset",
                  }}
                  vector={checkVector}
                  vectorStyle={{
                    height: "11px",
                    left: "5px",
                    top: "7px",
                    width: "14px",
                  }}
                />
              </>
            )}

            {(type === "Destructive" || type === "Informational" || type === "Warning") && (
              <>
                <div className="info">
                  <img
                    className="toast-vector"
                    alt={"Vector"}
                    src={
                      type === "Warning"
                        ? "/img/vector-111.png"
                        : type === "Destructive"
                        ? "/img/vector-113.png"
                        : "/img/vector-109.png"
                    }
                  />
                </div>
              </>
            )}
          </>
        </div>
        <>
          {(type === "Destructive" ||
            type === "Informational" ||
            type === "Warning" ||
            (action === "Yes" && type === "Success")) && (
            <>
              <div
                className="text-action"
                style={{
                  gap:
                    (action === "Yes" || device === "Desktop") &&
                    (action === "Yes" || type === "Success") &&
                    (device === "Mobile" || device === "Desktop") &&
                    (device === "Mobile" || type === "Success")
                      ? "8px"
                      : undefined,
                }}
              >
                <p
                  className="toast-text"
                  style={{
                    fontSize: device === "Desktop" ? "16px" : "14px",
                    lineHeight: device === "Desktop" ? "22.4px" : "17.8px",
                    whiteSpace: device === "Mobile" || (action === "No" && device === "Desktop") ? "nowrap" : undefined,
                  }}
                >
                  <>
                    {type === "Warning" && device === "Mobile" && <>This is an warning toast</>}

                    {(device === "Desktop" || (device === "Mobile" && type === "Informational")) && <>{text}</>}

                    {type === "Destructive" && device === "Mobile" && <>This is an destructive toast</>}

                    {type === "Success" && device === "Mobile" && <>This is an success toast</>}
                  </>
                </p>
                <>
                  {action === "Yes" && (
                    <>
                      <Buttons
                        device={device === "Desktop" ? "Desktop" : "Mobile"}
                        size="Small"
                        status="Default"
                        text="Button"
                        type="Secondary link"
                      />
                    </>
                  )}
                </>
              </div>
            </>
          )}

          {type === "Success" && action === "No" && (
            <>
              <p className={`text-1777-10552 ${device === "Mobile" ? "mobile" : "class"}`}>
                <>
                  {device === "Mobile" && <>This is an success toast</>}

                  {device === "Desktop" && <>{text}</>}
                </>
              </p>
            </>
          )}
        </>
      </div>
    </div>
  );
};

Toast.propTypes = {
  type: PropTypes.oneOf(["Warning", "Success", "Informational", "Destructive"]),
  device: PropTypes.oneOf(["Mobile", "Desktop"]),
  action: PropTypes.oneOf(["Yes", "No"]),
  checkVector: PropTypes.string,
  text: PropTypes.string,
};
