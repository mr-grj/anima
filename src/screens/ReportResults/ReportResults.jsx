import React from "react";
import { Treat } from "../../components/Treat";
import { Tags } from "../../components/Tags";
import { Product } from "../../components/Product";
import { Buttons } from "../../components/Buttons";
import { Search } from "../../components/Search";
import { Arrow } from "../../components/Arrow";
import "./style.css";

export const ReportResults = () => {
  return (
    <div className="report-results">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="bg" />
          <Buttons
            device="Desktop"
            labelStyle={{
              marginLeft: "-14.00px",
              marginRight: "-14.00px",
            }}
            size="Big"
            status="Default"
            style={{
              left: "1055px",
              position: "absolute",
              top: "16px",
              width: "201px",
            }}
            text="Free Consultation"
            type="Primary"
          />
          <div className="icon">
            <Arrow
              stroke="Bold"
              style={{
                height: "24px",
                left: "8px",
                top: "8px",
                width: "24px",
              }}
              type="Arrow Left"
              vector="/img/vector.svg"
              vectorStyle={{
                height: "14px",
                left: "5px",
                top: "5px",
                width: "14px",
              }}
            />
          </div>
          <h1 className="report-results-text-wrapper">Microbiome Report</h1>
          <div className="content">
            <div className="details">
              <div className="report-results-copy">
                <div className="text-wrapper-2">01/01/2023</div>
                <div className="text-wrapper-3">Report Date</div>
              </div>
              <div className="report-results-copy-2">
                <div className="text-wrapper-2">1</div>
                <div className="text-wrapper-3">Sample Number</div>
              </div>
              <img className="report-results-vector" alt={"Vector"} src={"/img/vector-144.svg"} />
              <img className="vector-145" alt={"Vector"} src={"/img/vector-144.svg"} />
              <div className="content-2">
                <img className="report-results-dog" alt={"Dog"} src={"/img/dog.png"} />
                <div className="copy-3">
                  <div className="copy-4">
                    <div className="name-en-x">Zeke</div>
                  </div>
                  <div className="row">
                    <p className="span-wrapper">
                      <span className="span">Labrador Retriever&nbsp;&nbsp;| 1 Year | </span>
                    </p>
                    <div className="tag">
                      <Treat
                        property1="Male"
                        style={{
                          height: "24px",
                          minWidth: "24px",
                          width: "unset",
                        }}
                        unionStyle={{
                          height: "14px",
                          left: "5px",
                          top: "5px",
                          width: "14px",
                        }}
                        vector="/img/vector-1.svg"
                      />
                      <div className="text-wrapper-4">Male</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-3">
              <div className="section">
                <div className="copy-5">
                  <div className="text-wrapper-5">Microbiome Population Results</div>
                  <p className="p">A comprehensive view of Zeke’s gut bacterial population.</p>
                </div>
                <div className="cards">
                  <div className="progressbar-card">
                    <div className="overlap-group">
                      <div className="rectangle" />
                      <div className="report-results-warning">
                        <div className="title">
                          <Treat
                            img="/img/vector-2.svg"
                            property1="Warning"
                            style={{
                              height: "24px",
                              minWidth: "24px",
                              width: "unset",
                            }}
                            unionStyle={{
                              height: "14px",
                              left: "5px",
                              top: "5px",
                              width: "13px",
                            }}
                          />
                          <div className="text-wrapper-6">Warning parameters</div>
                        </div>
                        <div className="row">
                          <Tags
                            device="Mobile"
                            selected="No"
                            size="Small"
                            style={{
                              backgroundColor: "#dcadad",
                            }}
                            text="Fat"
                            textStyle={{
                              color: "#082668",
                              lineHeight: "19.0px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="number">
                        <Arrow
                          img="/img/vector-3.svg"
                          stroke="Bold"
                          style={{
                            height: "24px",
                            left: "4px",
                            top: "4px",
                            width: "24px",
                          }}
                          type="Arrow Right"
                          vectorStyle={{
                            height: "14px",
                            left: "5px",
                            top: "5px",
                            width: "14px",
                          }}
                        />
                      </div>
                      <p className="how-balanced-are-zeke-s-bacteria">How balanced are Zeke&#39;s bacteria?</p>
                      <p className="gut-bacteria-population-is-poor">
                        <span className="text-wrapper-7">Gut bacteria population is </span>
                        <span className="text-wrapper-8">poor</span>
                      </p>
                      <div className="text-wrapper-9">Alpha Diversity</div>
                      <div className="text-wrapper-10">20%</div>
                      <div className="progress-bar">
                        <div className="group">
                          <div className="text-wrapper-11">0</div>
                          <div className="text-wrapper-12">100</div>
                          <div className="fill">
                            <div className="rectangle-5828" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progressbar-card-2">
                    <div className="frame">
                      <div className="frame-62">
                        <div className="text-wrapper-13">Evenness</div>
                        <div className="text-wrapper-14">91.2%</div>
                      </div>
                      <div className="copy-6">
                        <p className="text-wrapper-15">How balanced are Zeke&#39;s bacteria?</p>
                        <p className="p-2">
                          <span className="text-wrapper-7">Gut bacteria population is </span>
                          <span className="text-wrapper-16">evenly</span>
                          <span className="text-wrapper-7"> balanced</span>
                        </p>
                      </div>
                    </div>
                    <div className="group-10209">
                      <div className="tooltip">
                        <div className="overlap-group-2">
                          <img className="polygon" alt={"Polygon"} src={"/img/polygon-1.svg"} />
                          <div className="avg-wrapper">
                            <div className="avg">
                              <span className="text-wrapper-17">Avg: </span>
                              <span className="text-wrapper-18">86%</span>
                            </div>
                          </div>
                          <img className="polygon-2" alt={"Polygon"} src={"/img/polygon-1.svg"} />
                        </div>
                      </div>
                      <div className="slider">
                        <div className="overlap-2">
                          <div className="text-wrapper-19">Poor</div>
                          <div className="text-wrapper-20">Ok</div>
                          <div className="text-wrapper-21">Good</div>
                          <div className="report-results-div-2">
                            <div className="fill-wrapper">
                              <div className="fill-2" />
                            </div>
                            <div className="rectangle-23961" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="arrow-wrapper">
                      <Arrow
                        img="/img/vector-3.svg"
                        stroke="Bold"
                        style={{
                          height: "24px",
                          left: "4px",
                          top: "4px",
                          width: "24px",
                        }}
                        type="Arrow Right"
                        vectorStyle={{
                          height: "14px",
                          left: "5px",
                          top: "5px",
                          width: "14px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="progressbar-card-2">
                    <div className="frame">
                      <div className="frame-62">
                        <div className="text-wrapper-13">Richness</div>
                        <div className="text-wrapper-14">188</div>
                      </div>
                      <div className="copy-6">
                        <p className="text-wrapper-15">How balanced are Zeke&#39;s bacteria?</p>
                        <p className="p-2">
                          <span className="text-wrapper-7">Gut bacteria population is</span>
                          <span className="text-wrapper-16"> rich &amp; diverse</span>
                        </p>
                      </div>
                    </div>
                    <div className="group-10209">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <img className="polygon" alt={"Polygon"} src={"/img/polygon-1.svg"} />
                          <div className="avg-wrapper">
                            <div className="avg">
                              <span className="text-wrapper-17">Avg: </span>
                              <span className="text-wrapper-18">174</span>
                            </div>
                          </div>
                          <img className="report-results-img" alt={"Polygon"} src={"/img/polygon-1.svg"} />
                        </div>
                      </div>
                      <div className="slider">
                        <div className="overlap-2">
                          <div className="text-wrapper-19">Poor</div>
                          <div className="text-wrapper-20">Ok</div>
                          <div className="text-wrapper-21">Good</div>
                          <div className="report-results-div-2">
                            <div className="fill-wrapper">
                              <div className="fill-2" />
                            </div>
                            <div className="rectangle-23961" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="arrow-wrapper">
                      <Arrow
                        img="/img/vector-3.svg"
                        stroke="Bold"
                        style={{
                          height: "24px",
                          left: "4px",
                          top: "4px",
                          width: "24px",
                        }}
                        type="Arrow Right"
                        vectorStyle={{
                          height: "14px",
                          left: "5px",
                          top: "5px",
                          width: "14px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="copy-5">
                  <div className="text-wrapper-5">Nutritional Pathway Results</div>
                  <p className="p">Understand Zeke’s nutritional needs and how to support them</p>
                </div>
                <div className="frame-64">
                  <div className="div-3">
                    <div className="progressbar-card-3">
                      <div className="frame-63">
                        <div className="frame-62">
                          <div className="text-wrapper-13">Protein</div>
                          <div className="text-wrapper-22">4.9</div>
                        </div>
                        <div className="copy-6">
                          <p className="text-wrapper-15">How balanced are Zeke&#39;s protein?</p>
                          <p className="p-2">
                            <span className="text-wrapper-7">Zeke’s gut is </span>
                            <span className="text-wrapper-23">ok</span>
                            <span className="text-wrapper-7"> at breaking down protein</span>
                          </p>
                        </div>
                      </div>
                      <div className="slider-wrapper">
                        <div className="overlap-group1-wrapper">
                          <div className="overlap-2">
                            <div className="text-wrapper-19">Poor</div>
                            <div className="text-wrapper-20">Ok</div>
                            <div className="text-wrapper-21">Good</div>
                            <div className="report-results-div-2">
                              <div className="fill-wrapper">
                                <div className="fill-2" />
                              </div>
                              <div className="rectangle-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="report-results-warning">
                        <div className="title">
                          <Treat
                            img="/img/vector-2.svg"
                            property1="Warning"
                            style={{
                              height: "24px",
                              minWidth: "24px",
                              width: "unset",
                            }}
                            unionStyle={{
                              height: "14px",
                              left: "5px",
                              top: "5px",
                              width: "13px",
                            }}
                          />
                          <div className="text-wrapper-6">Warning parameters</div>
                        </div>
                        <div className="row">
                          <Tags
                            device="Mobile"
                            selected="No"
                            size="Small"
                            style={{
                              backgroundColor: "#a0d7f3",
                            }}
                            text="Allergy"
                            textStyle={{
                              color: "#082668",
                              lineHeight: "19.0px",
                            }}
                          />
                          <Tags
                            device="Mobile"
                            selected="No"
                            size="Small"
                            style={{
                              backgroundColor: "#dcadad",
                            }}
                            text="Fat"
                            textStyle={{
                              color: "#082668",
                              lineHeight: "19.0px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="arrow-wrapper">
                        <Arrow
                          img="/img/vector-3.svg"
                          stroke="Bold"
                          style={{
                            height: "24px",
                            left: "4px",
                            top: "4px",
                            width: "24px",
                          }}
                          type="Arrow Right"
                          vectorStyle={{
                            height: "14px",
                            left: "5px",
                            top: "5px",
                            width: "14px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="progressbar-card-3">
                      <div className="frame-63">
                        <div className="frame-62">
                          <div className="text-wrapper-13">Fat</div>
                          <div className="text-wrapper-22">5.6</div>
                        </div>
                        <div className="copy-6">
                          <p className="text-wrapper-15">How balanced are Zeke&#39;s fat?</p>
                          <p className="p-2">
                            <span className="text-wrapper-7">Zeke’s gut is </span>
                            <span className="text-wrapper-23">ok</span>
                            <span className="text-wrapper-7"> at breaking down fat.</span>
                          </p>
                        </div>
                      </div>
                      <div className="slider-wrapper">
                        <div className="overlap-group1-wrapper">
                          <div className="overlap-2">
                            <div className="text-wrapper-19">Poor</div>
                            <div className="text-wrapper-20">Ok</div>
                            <div className="text-wrapper-21">Good</div>
                            <div className="report-results-div-2">
                              <div className="fill-wrapper">
                                <div className="fill-2" />
                              </div>
                              <div className="rectangle-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="report-results-warning">
                        <div className="title">
                          <Treat
                            img="/img/vector-2.svg"
                            property1="Warning"
                            style={{
                              height: "24px",
                              minWidth: "24px",
                              width: "unset",
                            }}
                            unionStyle={{
                              height: "14px",
                              left: "5px",
                              top: "5px",
                              width: "13px",
                            }}
                          />
                          <div className="text-wrapper-6">Warning parameters</div>
                        </div>
                        <div className="row">
                          <Tags
                            device="Mobile"
                            selected="No"
                            size="Small"
                            style={{
                              backgroundColor: "#a0d7f3",
                            }}
                            text="Allergy"
                            textStyle={{
                              color: "#082668",
                              lineHeight: "19.0px",
                            }}
                          />
                          <Tags
                            device="Mobile"
                            selected="No"
                            size="Small"
                            style={{
                              backgroundColor: "#dcadad",
                            }}
                            text="Fat"
                            textStyle={{
                              color: "#082668",
                              lineHeight: "19.0px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="arrow-wrapper">
                        <Arrow
                          img="/img/vector-3.svg"
                          stroke="Bold"
                          style={{
                            height: "24px",
                            left: "4px",
                            top: "4px",
                            width: "24px",
                          }}
                          type="Arrow Right"
                          vectorStyle={{
                            height: "14px",
                            left: "5px",
                            top: "5px",
                            width: "14px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="progressbar-card-3">
                      <div className="frame-63">
                        <div className="frame-62">
                          <div className="text-wrapper-13">Carb &amp; Fiber</div>
                          <div className="text-wrapper-24">8.1</div>
                        </div>
                        <div className="copy-6">
                          <p className="text-wrapper-15">How balanced are Zeke&#39;s carb &amp; fiber?</p>
                          <p className="zeke-s-gut-bacteria-are-efficient">
                            <span className="text-wrapper-7">Zeke’s gut bacteria are </span>
                            <span className="text-wrapper-16">Efficient</span>
                            <span className="text-wrapper-7">&nbsp;</span>
                          </p>
                        </div>
                      </div>
                      <div className="slider-wrapper">
                        <div className="overlap-group1-wrapper">
                          <div className="overlap-2">
                            <div className="text-wrapper-19">Poor</div>
                            <div className="text-wrapper-20">Ok</div>
                            <div className="text-wrapper-21">Good</div>
                            <div className="report-results-div-2">
                              <div className="fill-wrapper">
                                <div className="fill-2" />
                              </div>
                              <div className="rectangle-23961" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="arrow-wrapper">
                        <Arrow
                          img="/img/vector-3.svg"
                          stroke="Bold"
                          style={{
                            height: "24px",
                            left: "4px",
                            top: "4px",
                            width: "24px",
                          }}
                          type="Arrow Right"
                          vectorStyle={{
                            height: "14px",
                            left: "5px",
                            top: "5px",
                            width: "14px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="div-3">
                    <div className="progressbar-card-3">
                      <div className="frame-63">
                        <div className="frame-62">
                          <div className="text-wrapper-13">Chondroitin</div>
                          <div className="text-wrapper-24">7</div>
                        </div>
                        <div className="copy-6">
                          <p className="how-balanced-are-zeke-s-chondroitin">
                            <span className="text-wrapper-18">How balanced are Zeke&#39;s Chondroitin?</span>
                          </p>
                          <p className="zeke-s-gut-is-efficient-at-breaking-down-chondroitin">
                            <span className="text-wrapper-7">Zeke’s gut is </span>
                            <span className="text-wrapper-16">Efficient</span>
                            <span className="text-wrapper-7"> at breaking down chondroitin</span>
                          </p>
                        </div>
                      </div>
                      <div className="slider-wrapper">
                        <div className="overlap-group1-wrapper">
                          <div className="overlap-2">
                            <div className="text-wrapper-19">Poor</div>
                            <div className="text-wrapper-20">Ok</div>
                            <div className="overlap-group-3">
                              <div className="text-wrapper-21">Good</div>
                              <div className="fill-wrapper">
                                <div className="fill-2" />
                              </div>
                              <div className="rectangle-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="arrow-wrapper">
                        <Arrow
                          img="/img/vector-3.svg"
                          stroke="Bold"
                          style={{
                            height: "24px",
                            left: "4px",
                            top: "4px",
                            width: "24px",
                          }}
                          type="Arrow Right"
                          vectorStyle={{
                            height: "14px",
                            left: "5px",
                            top: "5px",
                            width: "14px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="copy-7">
                  <div className="text-wrapper-5">Food guidance</div>
                  <p className="p">Based directly on Zake’ microbiome scores</p>
                </div>
                <div className="row">
                  <div className="report-results-tags">
                    <div className="report-results-text">Fresh</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-2">Suplements</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-2">Commercial</div>
                  </div>
                </div>
                <Search
                  device="Desktop"
                  magnifierVector="/img/vector-12.svg"
                  status="Default"
                  style={{
                    width: "944px",
                  }}
                  text="Find product"
                />
                <div className="div-3">
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
                <div className="div-3">
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
              <div className="div-4">
                <div className="copy-8">
                  <div className="text-wrapper-5">More Microbiome Data</div>
                  <p className="p">A comprehensive view of Zeke’s gut bacterial population.</p>
                </div>
                <div className="content-4">
                  <div className="progressbar-card-4">
                    <div className="overlap-3">
                      <div className="rectangle-5825" />
                      <div className="arrow-instance-wrapper">
                        <Arrow
                          img="/img/vector-13.svg"
                          stroke="Bold"
                          style={{
                            height: "24px",
                            left: "4px",
                            top: "4px",
                            width: "24px",
                          }}
                          type="Arrow Right"
                          vectorStyle={{
                            height: "14px",
                            left: "5px",
                            top: "5px",
                            width: "14px",
                          }}
                        />
                      </div>
                      <div className="legend">
                        <div className="rectangle-23967" />
                        <div className="text-wrapper-25">Actinobacteriota</div>
                      </div>
                      <div className="legend-2">
                        <div className="rectangle-5" />
                        <div className="text-wrapper-25">Campilobacterota</div>
                      </div>
                      <div className="legend-3">
                        <div className="rectangle-6" />
                        <div className="text-wrapper-25">Fusobacteriota</div>
                      </div>
                      <div className="legend-4">
                        <div className="rectangle-7" />
                        <div className="text-wrapper-25">Bacteroidota</div>
                      </div>
                      <div className="legend-5">
                        <div className="rectangle-8" />
                        <div className="text-wrapper-25">Firmicutes</div>
                      </div>
                      <div className="legend-6">
                        <div className="rectangle-9" />
                        <div className="text-wrapper-25">Proteobacteria</div>
                      </div>
                      <div className="graph">
                        <div className="text-wrapper-26">0.25</div>
                        <div className="text-wrapper-27">0.50</div>
                        <div className="text-wrapper-28">0.75</div>
                        <div className="text-wrapper-29">1.00</div>
                        <div className="text-wrapper-30">0.00</div>
                        <div className="overlap-group-4">
                          <img className="report-results-line" alt={"Line"} src={"/img/line-7.svg"} />
                          <img className="line-13" alt={"Line"} src={"/img/line-7.svg"} />
                          <img className="line-9" alt={"Line"} src={"/img/line-7.svg"} />
                          <img className="line-11" alt={"Line"} src={"/img/line-7.svg"} />
                          <img className="line-12" alt={"Line"} src={"/img/line-12.svg"} />
                          <div className="group-10210">
                            <div className="stat">
                              <div className="text-wrapper-31">Zeke</div>
                              <div className="stat-2">
                                <div className="rectangle-23966" />
                                <div className="rectangle-23963" />
                                <div className="rectangle-23965" />
                                <div className="rectangle-23964" />
                              </div>
                            </div>
                            <div className="stat-3">
                              <div className="text-wrapper-32">Average</div>
                              <div className="stat-4">
                                <div className="rectangle-23966" />
                                <div className="rectangle-23963" />
                                <div className="rectangle-10" />
                                <div className="rectangle-11" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title-2">
                        <div className="text-wrapper-33">Phylia Breakdown</div>
                      </div>
                    </div>
                  </div>
                  <div className="progressbar-card-4">
                    <div className="overlap-3">
                      <div className="rectangle-5825" />
                      <div className="arrow-instance-wrapper">
                        <Arrow
                          img="/img/vector-13.svg"
                          stroke="Bold"
                          style={{
                            height: "24px",
                            left: "4px",
                            top: "4px",
                            width: "24px",
                          }}
                          type="Arrow Right"
                          vectorStyle={{
                            height: "14px",
                            left: "5px",
                            top: "5px",
                            width: "14px",
                          }}
                        />
                      </div>
                      <div className="legend">
                        <div className="rectangle-23967" />
                        <div className="text-wrapper-25">Actinobacteriota</div>
                      </div>
                      <div className="legend-2">
                        <div className="rectangle-5" />
                        <div className="text-wrapper-25">Campilobacterota</div>
                      </div>
                      <div className="legend-3">
                        <div className="rectangle-6" />
                        <div className="text-wrapper-25">Fusobacteriota</div>
                      </div>
                      <div className="legend-4">
                        <div className="rectangle-7" />
                        <div className="text-wrapper-25">Bacteroidota</div>
                      </div>
                      <div className="legend-5">
                        <div className="rectangle-8" />
                        <div className="text-wrapper-25">Firmicutes</div>
                      </div>
                      <div className="legend-6">
                        <div className="rectangle-9" />
                        <div className="text-wrapper-25">Proteobacteria</div>
                      </div>
                      <div className="graph">
                        <div className="text-wrapper-26">0.25</div>
                        <div className="text-wrapper-27">0.50</div>
                        <div className="text-wrapper-28">0.75</div>
                        <div className="text-wrapper-29">1.00</div>
                        <div className="text-wrapper-30">0.00</div>
                        <div className="overlap-group-4">
                          <img className="report-results-line" alt={"Line"} src={"/img/line-7.svg"} />
                          <img className="line-13" alt={"Line"} src={"/img/line-7.svg"} />
                          <img className="line-9" alt={"Line"} src={"/img/line-7.svg"} />
                          <img className="line-11" alt={"Line"} src={"/img/line-7.svg"} />
                          <img className="line-12" alt={"Line"} src={"/img/line-12.svg"} />
                          <div className="group-10211">
                            <div className="stat">
                              <div className="text-wrapper-31">Zeke</div>
                              <div className="stat-2">
                                <div className="rectangle-23966" />
                                <div className="rectangle-23963" />
                                <div className="rectangle-23965" />
                                <div className="rectangle-23964" />
                              </div>
                            </div>
                            <div className="stat-5">
                              <div className="text-wrapper-32">Average</div>
                              <div className="stat-4">
                                <div className="rectangle-23966" />
                                <div className="rectangle-23963" />
                                <div className="rectangle-10" />
                                <div className="rectangle-11" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title-3">
                        <div className="text-wrapper-33">Genus Breakdown</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logos">
            <img className="logo" alt={"Logo"} src={"/img/logo.svg"} />
            <img className="image" alt={"Image"} src={"/img/image-9.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};
