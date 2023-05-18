import React from "react";
import "./style.css";

export const Notification = () => {
  return (
    <div className="notification">
      <div className="screen-highlight" />
      <div className="area-pressets">
        <div className="content-headers">
          <div className="frame">
            <div className="section-tags">
              <div className="heading">NOTIFICATION</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div
          className="separator"
          style={{
            backgroundImage: "url(/img/line-3.svg)",
          }}
        />
        <div className="icon-text-wrapper">
          <div className="icon-text">
            <div className="icons">
              <img className="img" alt={"Union"} src={"/img/union-23.svg"} />
            </div>
            <div className="div-2">
              <span className="text-wrapper">Type: </span>
              <span className="span">Success toast</span>
            </div>
          </div>
        </div>
        <div
          className="separator-2"
          style={{
            backgroundImage: "url(/img/line-3-1.svg)",
          }}
        />
      </div>
      <div className="content">
        <div
          className="separator"
          style={{
            backgroundImage: "url(/img/line-3.svg)",
          }}
        />
        <div className="div-wrapper">
          <div className="icon-text">
            <div className="notification-text-goes-here">Changes have been saved</div>
          </div>
        </div>
        <div
          className="separator-2"
          style={{
            backgroundImage: "url(/img/line-3-1.svg)",
          }}
        />
      </div>
      <div className="content">
        <div
          className="separator"
          style={{
            backgroundImage: "url(/img/line-3.svg)",
          }}
        />
        <div className="icon-text-wrapper">
          <div className="icon-text">
            <div className="icons">
              <img className="union" alt={"Union"} src={"/img/union-21.svg"} />
            </div>
            <div className="div-2">
              <span className="text-wrapper">Move user to: </span>
              <span className="text-wrapper-2">Pets</span>
            </div>
          </div>
        </div>
        <div
          className="separator-2"
          style={{
            backgroundImage: "url(/img/line-3-1.svg)",
          }}
        />
      </div>
      <div className="content">
        <div
          className="separator"
          style={{
            backgroundImage: "url(/img/line-3.svg)",
          }}
        />
        <div className="icon-text-wrapper">
          <div className="icon-text">
            <div className="icons">
              <img className="union" alt={"Union"} src={"/img/union-21.svg"} />
            </div>
            <div className="div-2">
              <span className="text-wrapper">Example:</span>
              <span className="text-wrapper-3">&nbsp;</span>
              <span className="text-wrapper-2">Notification</span>
            </div>
          </div>
        </div>
        <div
          className="separator-2"
          style={{
            backgroundImage: "url(/img/line-3-1.svg)",
          }}
        />
      </div>
    </div>
  );
};
