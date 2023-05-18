import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const TextField = ({
  device,
  status,
  type,
  text = "Placeholder",
  text1 = "First name",
  text2 = "Something typed",
}) => {
  return (
    <div
      className="text-field"
      style={{
        borderRadius: status === "Default" && type === "Text input" ? "12px" : undefined,
        height:
          type === "Text input" &&
          (device === "Desktop" || device === "Mobile") &&
          (device === "Desktop" || status === "Filled") &&
          (device === "Mobile" || status === "Default") &&
          (status === "Default" || status === "Filled")
            ? "56px"
            : (status === "Default" && type === "Text area") ||
              (status === "Filled" && type === "Text area") ||
              (device === "Desktop" && status === "Typing" && type === "Text area") ||
              (device === "Mobile" && status === "Data viewer" && type === "Text area") ||
              (device === "Mobile" && status === "Disabled" && type === "Text area") ||
              (device === "Mobile" && status === "Hightlight" && type === "Text area")
            ? "136px"
            : device === "Desktop" && type === "Text area" && (status === "Data viewer" || status === "Hightlight")
            ? "144px"
            : undefined,
        justifyContent:
          type === "Text input" &&
          (device === "Desktop" || device === "Mobile") &&
          (device === "Desktop" || status === "Hightlight") &&
          (device === "Mobile" || status === "Disabled") &&
          (status === "Disabled" || status === "Hightlight")
            ? "center"
            : undefined,
      }}
    >
      <>
        {(status === "Default" ||
          status === "Disabled" ||
          status === "Filled" ||
          status === "Hightlight" ||
          status === "Typing" ||
          (status === "Data viewer" && type === "Text area")) && (
          <>
            <div
              className="input"
              style={{
                alignItems: status === "Default" && type === "Text input" ? "center" : "flex-start",
                backgroundColor:
                  status === "Default" || status === "Filled" || status === "Hightlight" || status === "Typing"
                    ? "#ffffff"
                    : status === "Disabled" && type === "Text input"
                    ? "#e6e9f0"
                    : type === "Text area" && status === "Disabled"
                    ? "#ced4e1"
                    : undefined,
                border: status === "Hightlight" || status === "Typing" ? "2px solid" : undefined,
                borderColor: status === "Typing" ? "#395186" : status === "Hightlight" ? "#20469e" : undefined,
                borderRadius:
                  status === "Default" ||
                  status === "Disabled" ||
                  status === "Filled" ||
                  status === "Hightlight" ||
                  status === "Typing"
                    ? "12px"
                    : undefined,
                flex:
                  status === "Data viewer" ||
                  (status === "Default" && type === "Text area") ||
                  (status === "Filled" && type === "Text area") ||
                  (status === "Hightlight" && type === "Text area") ||
                  (device === "Desktop" && status === "Typing" && type === "Text area") ||
                  (device === "Mobile" && status === "Disabled" && type === "Text area")
                    ? "1"
                    : undefined,
                flexDirection:
                  type === "Text input" &&
                  (status === "Disabled" || status === "Filled" || status === "Hightlight" || status === "Typing")
                    ? "column"
                    : undefined,
                gap:
                  (status === "Default" || status === "Typing") &&
                  (status === "Default" || type === "Text area") &&
                  (status === "Typing" || type === "Text input") &&
                  (type === "Text input" || type === "Text area")
                    ? "8px"
                    : undefined,
                height:
                  type === "Text input"
                    ? "56px"
                    : type === "Text area" &&
                      (device === "Desktop" || device === "Mobile") &&
                      (device === "Desktop" || status === "Typing") &&
                      (device === "Mobile" || status === "Disabled") &&
                      (status === "Disabled" || status === "Typing")
                    ? "120px"
                    : undefined,
                justifyContent:
                  type === "Text input" &&
                  (status === "Disabled" || status === "Filled" || status === "Hightlight" || status === "Typing")
                    ? "center"
                    : undefined,
                overflow: type === "Text area" && status === "Typing" ? "hidden" : undefined,
                padding:
                  type === "Text input"
                    ? "12px 16px 12px 12px"
                    : type === "Text area" &&
                      (status === "Default" || status === "Filled" || status === "Hightlight" || status === "Typing")
                    ? "12px 16px"
                    : type === "Text area" && status === "Disabled"
                    ? "8px 16px 16px"
                    : undefined,
              }}
            >
              <>
                {(status === "Data viewer" ||
                  status === "Default" ||
                  (status === "Disabled" && type === "Text area") ||
                  (status === "Filled" && type === "Text area")) && (
                  <>
                    <div
                      className="text-field-div-2"
                      style={{
                        alignItems: type === "Text input" ? "flex-start" : undefined,
                        color:
                          status === "Default" && type === "Text area"
                            ? "#9ca8c3"
                            : status === "Data viewer" || status === "Filled"
                            ? "#082668"
                            : status === "Disabled"
                            ? "#6b7da4"
                            : undefined,
                        display: type === "Text input" ? "flex" : undefined,
                        flexDirection: type === "Text input" ? "column" : undefined,
                        fontFamily: type === "Text area" ? "'Poppins', Helvetica" : undefined,
                        fontSize:
                          type === "Text area" && device === "Desktop"
                            ? "18px"
                            : type === "Text area" && device === "Mobile"
                            ? "16px"
                            : undefined,
                        fontWeight:
                          status === "Disabled" || status === "Filled" || (status === "Default" && type === "Text area")
                            ? "400"
                            : status === "Data viewer"
                            ? "600"
                            : undefined,
                        letterSpacing: type === "Text area" ? "0" : undefined,
                        lineHeight:
                          type === "Text area" && device === "Desktop"
                            ? "23.8px"
                            : type === "Text area" && device === "Mobile"
                            ? "24.3px"
                            : undefined,
                        marginTop:
                          status === "Data viewer" ||
                          status === "Filled" ||
                          (status === "Default" && type === "Text area")
                            ? "-2.00px"
                            : status === "Disabled"
                            ? "-1.00px"
                            : undefined,
                        whiteSpace: type === "Text area" ? "nowrap" : undefined,
                      }}
                    >
                      <>
                        {type === "Text input" && (
                          <>
                            <div className="placeholder-text">{text}</div>
                          </>
                        )}

                        {status === "Default" && type === "Text area" && <>{text}</>}

                        {(status === "Filled" || (device === "Desktop" && status === "Data viewer")) && <>{text2}</>}

                        {device === "Mobile" && status === "Data viewer" && <>Something typed sdfsdf</>}

                        {status === "Disabled" && <>Disabled</>}
                      </>
                    </div>
                  </>
                )}

                {(status === "Typing" ||
                  (status === "Disabled" && type === "Text input") ||
                  (status === "Filled" && type === "Text input") ||
                  (status === "Hightlight" && type === "Text input")) && (
                  <>
                    <div
                      className="label"
                      style={{
                        alignSelf:
                          (device === "Mobile" && status === "Disabled") ||
                          (device === "Mobile" && status === "Filled") ||
                          (device === "Mobile" && status === "Hightlight") ||
                          (device === "Desktop" && status === "Typing" && type === "Text input")
                            ? "stretch"
                            : undefined,
                        color: status === "Disabled" ? "#9ca8c3" : type === "Text area" ? "#082668" : "#6b7da4",
                        fontSize:
                          type === "Text input" && device === "Mobile"
                            ? "12px"
                            : type === "Text area" && device === "Desktop"
                            ? "18px"
                            : type === "Text area" && device === "Mobile"
                            ? "16px"
                            : "14px",
                        fontWeight: type === "Text area" ? "400" : "600",
                        height:
                          (device === "Mobile" && status === "Disabled") ||
                          (device === "Mobile" && status === "Filled") ||
                          (device === "Mobile" && status === "Hightlight") ||
                          (device === "Desktop" && status === "Typing" && type === "Text input")
                            ? "16px"
                            : undefined,
                        lineHeight:
                          type === "Text input" && device === "Mobile"
                            ? "14.4px"
                            : type === "Text area" && device === "Desktop"
                            ? "23.8px"
                            : type === "Text area" && device === "Mobile"
                            ? "24.3px"
                            : "19.0px",
                        marginTop:
                          device === "Desktop" && (status === "Filled" || status === "Hightlight")
                            ? "-7.50px"
                            : device === "Mobile" &&
                              (status === "Disabled" || status === "Typing") &&
                              (status === "Disabled" || type === "Text input")
                            ? "-5.00px"
                            : status === "Disabled" && device === "Desktop"
                            ? "-6.50px"
                            : type === "Text area"
                            ? "-2.00px"
                            : "-6.00px",
                        width:
                          (device === "Desktop" && status === "Disabled") ||
                          (device === "Desktop" && status === "Filled") ||
                          (device === "Desktop" && status === "Hightlight") ||
                          (device === "Desktop" && type === "Text area") ||
                          (device === "Mobile" && status === "Typing")
                            ? "fit-content"
                            : undefined,
                      }}
                    >
                      <>
                        {type === "Text input" && <>{text1}</>}

                        {type === "Text area" && <>Typing something</>}
                      </>
                    </div>
                    <div
                      className="placeholder-text-1777-15330"
                      style={{
                        alignSelf:
                          status === "Disabled" ||
                          status === "Filled" ||
                          (device === "Mobile" && status === "Hightlight") ||
                          (device === "Desktop" && status === "Typing" && type === "Text input")
                            ? "stretch"
                            : undefined,
                        backgroundColor: type === "Text area" ? "#082668" : undefined,
                        color:
                          status === "Filled" ||
                          status === "Hightlight" ||
                          (status === "Typing" && type === "Text input")
                            ? "#082668"
                            : status === "Disabled"
                            ? "#9ca8c3"
                            : undefined,
                        fontFamily: type === "Text input" ? "'Poppins', Helvetica" : undefined,
                        fontSize:
                          device === "Desktop" && (status === "Disabled" || status === "Filled")
                            ? "18px"
                            : status === "Hightlight" ||
                              (device === "Mobile" && status === "Disabled") ||
                              (device === "Mobile" && status === "Filled") ||
                              (status === "Typing" && type === "Text input")
                            ? "16px"
                            : undefined,
                        fontWeight: type === "Text input" ? "400" : undefined,
                        height: type === "Text area" ? "24px" : undefined,
                        letterSpacing: type === "Text input" ? "0" : undefined,
                        lineHeight:
                          device === "Desktop" && (status === "Disabled" || status === "Filled")
                            ? "23.8px"
                            : status === "Hightlight" ||
                              (device === "Mobile" && status === "Disabled") ||
                              (device === "Mobile" && status === "Filled") ||
                              (status === "Typing" && type === "Text input")
                            ? "24.3px"
                            : undefined,
                        marginBottom:
                          device === "Desktop" && (status === "Filled" || status === "Hightlight")
                            ? "-3.50px"
                            : (device === "Desktop" || device === "Mobile") &&
                              (device === "Mobile" || status === "Typing") &&
                              (device === "Mobile" || type === "Text input") &&
                              (device === "Desktop" || status === "Filled" || status === "Hightlight") &&
                              (status === "Typing" || status === "Filled" || status === "Hightlight") &&
                              (status === "Filled" || status === "Hightlight" || type === "Text input")
                            ? "-2.00px"
                            : type === "Text input" && status === "Typing" && device === "Mobile"
                            ? "-1.00px"
                            : status === "Disabled" && device === "Desktop"
                            ? "-4.50px"
                            : status === "Disabled" && device === "Mobile"
                            ? "-3.00px"
                            : undefined,
                        minWidth: type === "Text area" ? "2px" : undefined,
                        whiteSpace: type === "Text input" ? "nowrap" : undefined,
                        width:
                          (device === "Desktop" || device === "Mobile") &&
                          (device === "Desktop" || status === "Typing") &&
                          (device === "Desktop" || type === "Text input") &&
                          (device === "Mobile" || status === "Hightlight") &&
                          (status === "Hightlight" || status === "Typing") &&
                          (status === "Hightlight" || type === "Text input")
                            ? "fit-content"
                            : undefined,
                      }}
                    >
                      <>
                        {(status === "Disabled" ||
                          status === "Filled" ||
                          (device === "Mobile" && status === "Hightlight")) && <>{text2}</>}

                        {type === "Text input" && status === "Typing" && <>Typ...</>}

                        {device === "Desktop" && status === "Hightlight" && <>Theresa</>}
                      </>
                    </div>
                  </>
                )}

                {type === "Text area" && status === "Hightlight" && (
                  <>
                    <p className={`paragraph ${device === "Desktop" ? "desktop" : "class"}`}>
                      Lorem ipsum is quite useful for getting information on obscure artists if you have it. If you
                      search for DTG.
                    </p>
                  </>
                )}
              </>
            </div>
          </>
        )}

        {(status === "Error" || (status === "Data viewer" && type === "Text input")) && (
          <>
            <div
              className="label-2"
              style={{
                alignSelf: status === "Error" ? "stretch" : undefined,
                backgroundColor: status === "Error" ? "#f3d5da" : undefined,
                border: status === "Error" ? "2px solid" : undefined,
                borderColor: status === "Error" ? "#c52e48" : undefined,
                borderRadius: status === "Error" ? "12px" : undefined,
                flexDirection: type === "Text input" && status === "Error" ? "column" : undefined,
                gap: status === "Data viewer" ? "10px" : undefined,
                height:
                  type === "Text input" && status === "Error" ? "56px" : type === "Text area" ? "104px" : undefined,
                justifyContent: type === "Text input" && status === "Error" ? "center" : undefined,
                padding:
                  type === "Text input" && status === "Error"
                    ? "12px 16px 12px 12px"
                    : type === "Text area"
                    ? "12px 16px"
                    : undefined,
                width: status === "Data viewer" ? "fit-content" : undefined,
              }}
            >
              <>
                {(status === "Data viewer" || type === "Text area") && (
                  <>
                    <div
                      className="label"
                      style={{
                        color: type === "Text area" ? "#c52e48" : "#6b7da4",
                        flex: type === "Text area" ? "1" : undefined,
                        fontSize:
                          device === "Mobile" && status === "Data viewer"
                            ? "14px"
                            : type === "Text area" && device === "Desktop"
                            ? "18px"
                            : "16px",
                        fontWeight: type === "Text area" ? "400" : "700",
                        lineHeight:
                          device === "Mobile" && status === "Data viewer"
                            ? "17.8px"
                            : type === "Text area" && device === "Desktop"
                            ? "23.8px"
                            : status === "Error" && device === "Mobile"
                            ? "24.3px"
                            : "22.4px",
                        marginTop: type === "Text area" ? "-2.00px" : "-1.00px",
                        width: type === "Text input" ? "fit-content" : undefined,
                      }}
                    >
                      <>
                        {type === "Text input" && <>Field label</>}

                        {type === "Text area" && <>{text2}</>}
                      </>
                    </div>
                  </>
                )}

                {type === "Text input" && status === "Error" && (
                  <>
                    <div className={`label-1777-15353 ${device === "Mobile" ? "mobile" : "class-2"}`}>{text1}</div>
                    <div
                      className={`placeholder-text-1777-15354 ${
                        device === "Desktop" ? "desktop-placeholder-text" : "class-3"
                      }`}
                    >
                      {text2}
                    </div>
                  </>
                )}
              </>
            </div>
            <div className={`input ${status === "Error" ? "error" : "class-4"}`}>
              <div
                className="placeholder-text-1777-15334"
                style={{
                  color: status === "Error" ? "#c52e48" : "#082668",
                  fontSize:
                    device === "Mobile" && status === "Data viewer"
                      ? "16px"
                      : device === "Desktop" && status === "Error"
                      ? "14px"
                      : status === "Error" && device === "Mobile"
                      ? "12px"
                      : "18px",
                  lineHeight:
                    device === "Mobile" && status === "Data viewer"
                      ? "24.3px"
                      : device === "Desktop" && status === "Error"
                      ? "19.0px"
                      : status === "Error" && device === "Mobile"
                      ? "14.4px"
                      : "23.8px",
                  marginTop: status === "Error" ? "-1.00px" : "-2.00px",
                }}
              >
                <>
                  {status === "Data viewer" && <>{text2}</>}

                  {status === "Error" && <>Error message</>}
                </>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
};

TextField.propTypes = {
  device: PropTypes.oneOf(["Mobile", "Desktop"]),
  status: PropTypes.oneOf(["Disabled", "Filled", "Typing", "Error", "Hightlight", "Data viewer", "Default"]),
  type: PropTypes.oneOf(["Text area", "Text input"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
