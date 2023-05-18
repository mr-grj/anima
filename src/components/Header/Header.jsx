import React from "react";
import PropTypes from "prop-types";
import { Treat } from "../Treat";
import { Buttons } from "../Buttons";
import { Arrow } from "../Arrow";
import "./style.css";

export const Header = ({
  type,
  style,
  logo = "/img/logo-3.png",
  treatUnion = "/img/union-19.png",
  treatVector = "/img/vector-86.png",
  treatImg = "/img/vector-87.png",
}) => {
  return (
    <div className="header" style={style}>
      <>
        {(type === "Admin" || type === "User") && (
          <>
            <img className="header-logo" alt={"Logo"} src={logo} />
            <div
              className="avatars"
              style={{
                backgroundImage: "url(/img/face-boy-02.png)",
              }}
            />
            <div className={`tabs ${type === "Admin" ? "admin-tabs" : "class-4"}`}>
              <div className={`tab ${type === "User" ? "user-tab" : "class-2"}`}>
                <div className="frame">
                  <Treat
                    homeFill={type === "Admin" ? "/img/home-1-fill-1.png" : undefined}
                    property1={type === "User" ? "Pet" : "Home"}
                    style={{
                      height: "32px",
                      minWidth: "32px",
                      width: "unset",
                    }}
                    union1={type === "User" ? treatUnion : undefined}
                    unionStyle={
                      type === "User"
                        ? {
                            height: "17px",
                            left: "5px",
                            top: "7px",
                            width: "20px",
                          }
                        : {
                            height: "19px",
                            left: "6px",
                            top: "6px",
                            width: "18px",
                          }
                    }
                  />
                  <div className="header-home">
                    <>
                      {type === "Admin" && <>Home</>}

                      {type === "User" && <>My Pets</>}
                    </>
                  </div>
                </div>
                <div className={`header-rectangle ${type === "User" ? "user" : "class"}`} />
              </div>
              <div className={`tab-2 ${type === "Admin" ? "admin" : "class-3"}`}>
                <div className="div">
                  <Treat
                    property1={type === "Admin" ? "Customers" : "Bag"}
                    style={{
                      height: "32px",
                      minWidth: "32px",
                      width: "unset",
                    }}
                    union3={type === "Admin" ? "/img/union-20.png" : undefined}
                    unionStyle={
                      type === "Admin"
                        ? {
                            height: "19px",
                            left: "7px",
                            top: "6px",
                            width: "19px",
                          }
                        : {
                            height: "19px",
                            left: "7px",
                            top: "6px",
                            width: "17px",
                          }
                    }
                    vector2={type === "User" ? treatVector : undefined}
                  />
                  <div className="header-div-2">
                    <>
                      {type === "User" && <>Food guidance</>}

                      {type === "Admin" && <>Customers</>}
                    </>
                  </div>
                </div>
              </div>
              <>
                {type === "Admin" && (
                  <>
                    <div className="icon-text-wrapper">
                      <div className="div">
                        <Treat
                          property1="Bag"
                          style={{
                            height: "32px",
                            minWidth: "32px",
                            width: "unset",
                          }}
                          unionStyle={{
                            height: "19px",
                            left: "7px",
                            top: "6px",
                            width: "17px",
                          }}
                          vector2="/img/vector-86.png"
                        />
                        <div className="header-div-2">Products</div>
                      </div>
                    </div>
                  </>
                )}
              </>
            </div>
          </>
        )}
      </>
      <div className={`header-icon ${type === "Back - Save" ? "back-save" : "class-5"}`}>
        <>
          {type === "Back - Save" && (
            <>
              <Arrow
                stroke="Bold"
                style={{
                  height: "24px",
                  left: "8px",
                  top: "8px",
                  width: "24px",
                }}
                type="Arrow Left"
                vector="/img/vector-15.png"
                vectorStyle={{
                  height: "14px",
                  left: "5px",
                  top: "5px",
                  width: "14px",
                }}
              />
            </>
          )}

          {(type === "Admin" || type === "User") && (
            <>
              <div className="header-overlap-group">
                <Treat
                  property1="Add"
                  style={{
                    height: "16px",
                    left: "8px",
                    top: "8px",
                    width: "16px",
                  }}
                  unionStyle={{
                    height: "10px",
                    left: "3px",
                    top: "3px",
                    width: "10px",
                  }}
                  vector3={treatImg}
                />
              </div>
            </>
          )}
        </>
      </div>
      <>
        {type === "Back - Save" && (
          <>
            <Buttons
              device="Desktop"
              size="Big"
              status="Default"
              style={{
                left: "1146px",
                position: "absolute",
                top: "8px",
              }}
              text="Save"
              type="Primary"
            />
          </>
        )}
      </>
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.oneOf(["Admin", "Back - Save", "User"]),
  logo: PropTypes.string,
  treatUnion: PropTypes.string,
  treatVector: PropTypes.string,
  treatImg: PropTypes.string,
};
