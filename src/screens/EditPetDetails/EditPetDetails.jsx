import React from "react";
import { Cross } from "../../components/Cross";
import { Buttons } from "../../components/Buttons";
import { TextField } from "../../components/TextField";
import { Treat } from "../../components/Treat";
import "./style.css";

export const EditPetDetails = () => {
  return (
    <div className="edit-pet-details">
      <div className="add-new-pet-wrapper">
        <div className="edit-pet-details-add-new-pet">
          <div className="overlap-group">
            <div className="content">
              <div className="text-wrapper">Edit pet details</div>
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
                  vector="/img/vector-100.svg"
                  vectorStyle={{
                    height: "13px",
                    left: "5px",
                    top: "5px",
                    width: "13px",
                  }}
                />
              </div>
              <div className="form-button">
                <div className="div-2">
                  <div className="img">
                    <div
                      className="avatars"
                      style={{
                        backgroundImage: "url(/img/icon-avatar-8.svg)",
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
                        union="/img/union-26.svg"
                        unionStyle={{
                          height: "14px",
                          left: "5px",
                          top: "5px",
                          width: "14px",
                        }}
                      />
                    </div>
                  </div>
                  <TextField device="Desktop" status="Filled" text1="Pet’s name" text2="Zake" type="Text input" />
                  <TextField device="Desktop" status="Filled" text1="Breed" text2="Breed goes here" type="Text input" />
                </div>
                <Buttons
                  device="Desktop"
                  size="Big"
                  status="Default"
                  style={{
                    width: "124px",
                  }}
                  text="Save"
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
