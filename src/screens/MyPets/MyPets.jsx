import React from "react";
import { Link } from "react-router-dom";
import { Treat } from "../../components/Treat";
import { Product } from "../../components/Product";
import { Buttons } from "../../components/Buttons";
import { Search } from "../../components/Search";
import "./style.css";

export const MyPets = () => {
  return (
    <div className="my-pets">
      <div className="my-pets-1pet">
        <div className="overlap">
          <img className="union" alt={"Union"} src={"/img/union-8.svg"} />
          <img className="img" alt={"Union"} src={"/img/union-11.svg"} />
          <div className="content">
            <div className="div-2">
              <div className="details">
                <div className="copy">
                  <div className="text-wrapper">Homecooked</div>
                  <div className="text-wrapper-2">Diet</div>
                </div>
                <div className="copy-2">
                  <div className="text-wrapper">Allergies</div>
                  <div className="text-wrapper-2">Health goal</div>
                </div>
                <div className="copy-3">
                  <div className="text-wrapper">360 days</div>
                  <div className="text-wrapper-2">Last test</div>
                </div>
                <img className="vector" alt={"Vector"} src={"/img/vector-144-2.svg"} />
                <img className="vector-145" alt={"Vector"} src={"/img/vector-144-2.svg"} />
                <img className="vector-146" alt={"Vector"} src={"/img/vector-144-2.svg"} />
                <div className="icon">
                  <div className="overlap-group">
                    <Link className="ellipse" to={"/edit-pet-details"} />
                    <Treat
                      property1="Edit"
                      style={{
                        height: "24px",
                        left: "4px",
                        position: "absolute",
                        top: "4px",
                        width: "24px",
                      }}
                      union="/img/union-14.svg"
                      unionStyle={{
                        height: "14px",
                        left: "5px",
                        top: "5px",
                        width: "14px",
                      }}
                    />
                  </div>
                </div>
                <div className="content-2">
                  <img className="dog" alt={"Dog"} src={"/img/dog-2.png"} />
                  <div className="copy-4">
                    <h1 className="name-en-x">Zeke</h1>
                    <div className="name-en-x-2">Labrador Retriever</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-3">
              <div className="div-4">
                <div className="title">
                  <div className="text-wrapper-3">Reports</div>
                </div>
                <div className="div-4">
                  <div className="my-pets-header">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-4">Provider</div>
                      <div className="text-wrapper-5">Report Date</div>
                      <div className="text-wrapper-6">View</div>
                      <div className="text-wrapper-7">Sample Date</div>
                    </div>
                  </div>
                  <Link className="row" to={"/report-results"}>
                    <div className="text-wrapper-8">04/04/2023</div>
                    <div className="text-wrapper-9">Good Woof</div>
                    <div className="text-wrapper-10">04/04/2023</div>
                    <div className="logo">
                      <img className="image" alt={"Image"} src={"/img/image-6.png"} />
                    </div>
                    <div className="number">
                      <img className="vector-137" alt={"Vector"} src={"/img/vector-137.svg"} />
                    </div>
                  </Link>
                  <Link className="row" to={"/report-results"}>
                    <div className="text-wrapper-8">01/01/2023</div>
                    <div className="text-wrapper-9">Treat</div>
                    <div className="text-wrapper-10">01/01/2023</div>
                    <div className="number">
                      <img className="vector-137" alt={"Vector"} src={"/img/vector-137.svg"} />
                    </div>
                    <div className="image-wrapper">
                      <img className="image-4" alt={"Image"} src={"/img/image-4.png"} />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="div-5">
                <div className="chart">
                  <div className="text-wrapper-11">Microbiome Population Results</div>
                  <div className="legend">
                    <div className="div-6">
                      <div className="ellipse-840" />
                      <div className="text-wrapper-12">Alpha Diversity</div>
                    </div>
                    <div className="div-6">
                      <div className="ellipse-2" />
                      <div className="text-wrapper-12">Evenness</div>
                    </div>
                    <div className="div-6">
                      <div className="ellipse-3" />
                      <div className="text-wrapper-12">Richness</div>
                    </div>
                  </div>
                  <div className="overlap-2">
                    <div className="graph">
                      <div className="overlap-3">
                        <div className="rectangle" />
                        <div className="rectangle-23971" />
                        <div className="rectangle-23972" />
                        <div className="text-wrapper-13">Poor</div>
                        <div className="text-wrapper-14">Ok</div>
                        <div className="text-wrapper-15">Good</div>
                        <div className="graph-2">
                          <div className="graph-3">
                            <div className="group">
                              <div className="title-2">100%</div>
                            </div>
                            <div className="group-3">
                              <div className="title-2">60%</div>
                            </div>
                            <div className="group-2">
                              <div className="title-2">40%</div>
                            </div>
                            <div className="group-1">
                              <div className="title-2">10%</div>
                            </div>
                            <div className="title-3">0%</div>
                            <div className="overlap-group-3">
                              <img className="vector-62" alt={"Vector"} src={"/img/vector-62-1.svg"} />
                              <img className="vector-63" alt={"Vector"} src={"/img/vector-63-1.svg"} />
                            </div>
                          </div>
                          <div className="text-wrapper-16">01/01</div>
                          <div className="text-wrapper-17">04/04</div>
                          <div className="text-wrapper-18">05/05</div>
                        </div>
                        <div className="stats">
                          <div className="rectangle-23962" />
                          <div className="rectangle-23973" />
                          <div className="rectangle-23974" />
                        </div>
                        <div className="stats-2">
                          <div className="rectangle-2" />
                          <div className="rectangle-3" />
                          <div className="rectangle-4" />
                        </div>
                        <div className="div-wrapper">
                          <div className="div-7">
                            <div className="rectangle-5" />
                            <div className="rectangle-6" />
                            <div className="rectangle-7" />
                            <img className="hand" alt={"Hand"} src={"/img/hand.svg"} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tooltip">
                      <div className="overlap-4">
                        <img className="polygon" alt={"Polygon"} src={"/img/polygon-1.svg"} />
                        <div className="tag">
                          <div className="zeke">
                            <span className="span">Zeke: </span>
                            <span className="text-wrapper-19">92%</span>
                          </div>
                          <div className="avg">
                            <span className="span">Avg: </span>
                            <span className="text-wrapper-19">86%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chart">
                  <div className="text-wrapper-11">Nutritional Pathway</div>
                  <div className="legend">
                    <div className="div-6">
                      <div className="ellipse-840" />
                      <div className="text-wrapper-12">Protein</div>
                    </div>
                    <div className="div-6">
                      <div className="ellipse-2" />
                      <div className="text-wrapper-12">Fat</div>
                    </div>
                    <div className="div-6">
                      <div className="ellipse-3" />
                      <div className="text-wrapper-12">Carb &amp; Fiber</div>
                    </div>
                    <div className="div-6">
                      <div className="ellipse-4" />
                      <div className="text-wrapper-12">Chondroitin</div>
                    </div>
                  </div>
                  <div className="overlap-5">
                    <div className="div-8">
                      <div className="overlap-3">
                        <div className="rectangle-23970" />
                        <div className="rectangle-8" />
                        <div className="rectangle-9" />
                        <div className="ellipse-849" />
                        <div className="ellipse-850" />
                        <div className="ellipse-851" />
                        <div className="ellipse-5" />
                        <div className="ellipse-844" />
                        <div className="ellipse-845" />
                        <div className="ellipse-846" />
                        <img className="vector-152" alt={"Vector"} src={"/img/vector-152.svg"} />
                        <img className="vector-153" alt={"Vector"} src={"/img/vector-153.svg"} />
                        <img className="vector-154" alt={"Vector"} src={"/img/vector-154.svg"} />
                        <img className="vector-150" alt={"Vector"} src={"/img/vector-150.svg"} />
                        <div className="ellipse-842" />
                        <div className="ellipse-843" />
                        <div className="ellipse-848" />
                        <div className="ellipse-841" />
                        <div className="ellipse-847" />
                        <div className="text-wrapper-20">Poor</div>
                        <div className="text-wrapper-21">Ok</div>
                        <div className="text-wrapper-22">Good</div>
                        <div className="div-8">
                          <div className="graph-4">
                            <div className="group-4">
                              <div className="title-2">10</div>
                            </div>
                            <div className="title-wrapper">
                              <div className="title-2">8</div>
                            </div>
                            <div className="group-5">
                              <div className="title-2">6</div>
                            </div>
                            <div className="group-6">
                              <div className="title-2">3</div>
                            </div>
                            <div className="title-4">0</div>
                            <div className="overlap-group2">
                              <div className="overlap-group-4">
                                <img className="vector-2" alt={"Vector"} src={"/img/vector-62-2.svg"} />
                                <img className="vector-63" alt={"Vector"} src={"/img/vector-63-1.svg"} />
                              </div>
                              <div className="overlap-group1">
                                <img className="vector-148" alt={"Vector"} src={"/img/vector-148.svg"} />
                                <img className="vector-155" alt={"Vector"} src={"/img/vector-155.svg"} />
                              </div>
                            </div>
                          </div>
                          <div className="text-wrapper-23">01/01</div>
                          <div className="text-wrapper-24">04/04</div>
                          <div className="text-wrapper-25">05/05</div>
                        </div>
                        <img className="vector-3" alt={"Vector"} src={"/img/vector-149.svg"} />
                        <img className="vector-3" alt={"Vector"} src={"/img/vector-149.svg"} />
                      </div>
                    </div>
                    <div className="tooltip-2">
                      <img className="hand-2" alt={"Hand"} src={"/img/hand-1.svg"} />
                      <div className="tooltip-3">
                        <div className="overlap-group-5">
                          <img className="polygon-1" alt={"Polygon"} src={"/img/polygon-1.svg"} />
                          <div className="tag">
                            <div className="zeke">
                              <span className="span">Zeke: </span>
                              <span className="text-wrapper-19">92%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-5">
                <div className="my-pets-product">
                  <p className="p">It’s been 76 days since the last test</p>
                  <p className="name-en-x-3">We think it might be time to book in a new one for Zake</p>
                  <Buttons
                    device="Desktop"
                    labelStyle={{
                      marginTop: "unset",
                    }}
                    size="Small"
                    status="Default"
                    style={{
                      height: "40px",
                      left: "328px",
                      padding: "8px 16px",
                      position: "absolute",
                      top: "48px",
                    }}
                    text="Book now"
                    type="Primary"
                  />
                  <img className="union-2" alt={"Union"} src={"/img/union-15.svg"} />
                  <img className="union-3" alt={"Union"} src={"/img/union-16.svg"} />
                  <img
                    className="element-treattherapeutics-removebg-preview"
                    alt={"Element treattherapeutics removebg preview"}
                    src={"/img/treattherapeutics-000080022-removebg-preview-1.png"}
                  />
                </div>
                <div className="my-pets-product">
                  <p className="p">Check out Pounce + Protect</p>
                  <p className="name-en-x-3">They might be needing some Chondroting support</p>
                  <Buttons
                    device="Desktop"
                    labelStyle={{
                      marginTop: "unset",
                    }}
                    size="Small"
                    status="Default"
                    style={{
                      height: "40px",
                      left: "328px",
                      padding: "8px 16px",
                      position: "absolute",
                      top: "48px",
                    }}
                    text="Book now"
                    type="Primary"
                  />
                  <img className="ezgif" alt={"Ezgif"} src={"/img/ezgif-1.png"} />
                  <img className="union-2" alt={"Union"} src={"/img/union-15.svg"} />
                  <img className="union-3" alt={"Union"} src={"/img/union-16.svg"} />
                </div>
              </div>
              <div className="div-4">
                <div className="text-wrapper-26">Food guidance</div>
                <div className="div-2">
                  <div className="segmented">
                    <div className="overlap-group-6">
                      <div className="rectangle-23968" />
                      <div className="tabs">
                        <div className="tab">
                          <div className="text-wrapper-27">Last report</div>
                        </div>
                        <div className="tab-2">
                          <div className="text-wrapper-28">All</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-2">
                    <div className="my-pets-tags">
                      <div className="text">Fresh</div>
                    </div>
                    <div className="tags-2">
                      <div className="text-2">Suplements</div>
                    </div>
                    <div className="tags-2">
                      <div className="text-2">Commercial</div>
                    </div>
                  </div>
                  <Search
                    device="Desktop"
                    magnifierVector="/img/vector-85.svg"
                    status="Default"
                    style={{
                      width: "944px",
                    }}
                    text="Find product"
                  />
                  <div className="div-5">
                    <Product
                      device="Desktop"
                      style={{
                        minWidth: "176px",
                        width: "unset",
                      }}
                      vector="/img/vector-128.svg"
                    />
                    <Product
                      device="Desktop"
                      style={{
                        minWidth: "176px",
                        width: "unset",
                      }}
                      vector="/img/vector-128.svg"
                    />
                    <Product
                      device="Desktop"
                      style={{
                        minWidth: "176px",
                        width: "unset",
                      }}
                      vector="/img/vector-128.svg"
                    />
                    <Product
                      device="Desktop"
                      style={{
                        minWidth: "176px",
                        width: "unset",
                      }}
                      vector="/img/vector-128.svg"
                    />
                    <Product
                      device="Desktop"
                      style={{
                        minWidth: "176px",
                        width: "unset",
                      }}
                      vector="/img/vector-128.svg"
                    />
                  </div>
                  <div className="div-5">
                    <Product
                      device="Desktop"
                      style={{
                        minWidth: "176px",
                        width: "unset",
                      }}
                      vector="/img/vector-128.svg"
                    />
                    <Product
                      device="Desktop"
                      style={{
                        minWidth: "176px",
                        width: "unset",
                      }}
                      vector="/img/vector-128.svg"
                    />
                    <Product
                      device="Desktop"
                      style={{
                        minWidth: "176px",
                        width: "unset",
                      }}
                      vector="/img/vector-128.svg"
                    />
                    <Product
                      device="Desktop"
                      style={{
                        minWidth: "176px",
                        width: "unset",
                      }}
                      vector="/img/vector-128.svg"
                    />
                    <Product
                      device="Desktop"
                      style={{
                        minWidth: "176px",
                        width: "unset",
                      }}
                      vector="/img/vector-128.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="union-4" alt={"Union"} src={"/img/union-9.svg"} />
        <img className="union-5" alt={"Union"} src={"/img/union-9.svg"} />
        <div className="overlap-group7">
          <div className="header-2">
            <img className="logo-2" alt={"Logo"} src={"/img/logo-2.svg"} />
            <div
              className="avatars"
              style={{
                backgroundImage: "url(/img/face-boy-02.png)",
              }}
            />
          </div>
          <div className="actions">
            <Link className="icon-text" to={"/request-new-kit"}>
              <Treat
                property1="Kit"
                style={{
                  height: "32px",
                  minWidth: "32px",
                  width: "unset",
                }}
                unionStyle={{
                  height: "19px",
                  left: "10px",
                  top: "6px",
                  width: "11px",
                }}
                vector1="/img/vector-84.svg"
              />
              <div className="text-wrapper-29">Request new Kit</div>
            </Link>
            <Link className="icon-text" to={"/add-new-pet"}>
              <Treat
                property1="Pet"
                style={{
                  height: "32px",
                  minWidth: "32px",
                  width: "unset",
                }}
                union1="/img/union-12.svg"
                unionStyle={{
                  height: "17px",
                  left: "5px",
                  top: "7px",
                  width: "20px",
                }}
              />
              <div className="text-wrapper-29">Add new Pet</div>
            </Link>
            <div className="icon-text-2">
              <Treat
                property1="Call"
                style={{
                  height: "32px",
                  minWidth: "32px",
                  width: "unset",
                }}
                union2="/img/union-13.svg"
                unionStyle={{
                  height: "19px",
                  left: "6px",
                  top: "6px",
                  width: "19px",
                }}
              />
              <div className="text-wrapper-29">Schedule a Call</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
