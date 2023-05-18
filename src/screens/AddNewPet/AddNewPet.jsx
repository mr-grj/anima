import React from "react";
import { Cross } from "../../components/Cross";
import { Buttons } from "../../components/Buttons";
import { TextField } from "../../components/TextField";
import { Treat } from "../../components/Treat";
import "./style.css";

export const AddNewPet = () => {
  return (
    <div className="add-new-pet">
      <div className="add-new-pet-wrapper">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="content">
              <div className="text-wrapper">Add new Pet</div>
              <h1 className="h-1">Please, fill the details</h1>
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
              <div className="form-button">
                <div className="add-new-pet-div-2">
                  <div className="img">
                    <div
                      className="avatars"
                      style={{
                        backgroundImage: "url(/img/icon-avatar-6.svg)",
                      }}
                    />
                    <div className="treat-wrapper">
                      <Treat
                        property1="Edit"
                        style={{
                          height: "24px",
                          left: "4px",
                          top: "4px",
                          width: "24px",
                        }}
                        union="/img/union-24.svg"
                        unionStyle={{
                          height: "14px",
                          left: "5px",
                          top: "5px",
                          width: "14px",
                        }}
                      />
                    </div>
                  </div>
                  <TextField device="Desktop" status="Default" text="Pet’s name" type="Text input" />
                  <TextField device="Desktop" status="Default" text="Breed" type="Text input" />
                </div>
                <Buttons
                  device="Desktop"
                  size="Big"
                  status="Default"
                  style={{
                    cursor: "pointer",
                    width: "124px",
                  }}
                  text="Save"
                  to="/my-pets-several-pets"
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
