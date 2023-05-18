import React from "react";
import { Cross } from "../../components/Cross";
import { Buttons } from "../../components/Buttons";
import "./style.css";

export const RequestNewKit = () => {
  return (
    <div className="request-new-kit">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="modal">
            <div className="overlap-group">
              <div className="text-wrapper">Request new Kit</div>
              <div className="icon">
                <Cross
                  stroke="Bold"
                  style={{
                    height: "24px",
                    left: "8px",
                    top: "8px",
                    width: "24px",
                  }}
                  vector="/img/vector-91.svg"
                  vectorStyle={{
                    height: "13px",
                    left: "5px",
                    top: "5px",
                    width: "13px",
                  }}
                />
              </div>
            </div>
            <h1 className="h-1">For which of your pets would you like the kit for?</h1>
            <div className="content">
              <div className="div-2">
                <div className="card">
                  <img className="dog" alt={"Dog"} src={"/img/dog-3.png"} />
                  <div className="copy">
                    <div className="name-en-x">Zeke</div>
                  </div>
                </div>
                <div className="card-2">
                  <img className="dog" alt={"Dog"} src={"/img/dog-3.png"} />
                  <div className="copy">
                    <div className="name-en-x-2">Tobby</div>
                  </div>
                </div>
              </div>
              <div className="form-button">
                <Buttons
                  device="Desktop"
                  size="Big"
                  status="Default"
                  style={{
                    width: "124px",
                  }}
                  text="Next"
                  type="Primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
