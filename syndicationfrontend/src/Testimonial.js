import React, { useState, useEffect } from "react";
import authorOne from "./assets/images/author-1.jpg";
import authorTwo from "./assets/images/author-2.jpg";
import authorFour from "./assets/images/author-4.jpg";
import axios from "axios";

const Testimonial = () => {
  // const [mapedData, setMapedData] = useState([]);

  // useEffect(() => {
  //   const loadData = async () => {
  //     const req = await axios.get("/testimonial");
  //     setMapedData(req.data.data);
  //     console.log(req.data.data);
  //   };
  //   loadData();
  // }, []);

  // return mapedData.map((val) => {
    return (
      <div>
    
        <section id="testimonial" className="testimonial-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-10">
                  <h4 className="title">Testimonial</h4>
                  <p className="text">
                   
                      "Stop wasting time and money designing and managing awebsite that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!"
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="row testimonial-active slick-initialized slick-slider slick-dotted">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      // style="opacity: 1; width: 4180px; transform: translate3d(-2280px, 0px, 0px);"
                    >
                     
                     
                      <div
                        className="col-lg-4 slick-slide slick-cloned"
                        data-slick-index="-3"
                        aria-hidden="true"
                        tabindex="-1"
                        //   style="width: 380px;"
                      >
                        <div className="single-testimonial mt-30 mb-30 text-center">
                          <div className="testimonial-image">
                            <img src={authorOne} alt="Author" />
                          </div>
                          <div className="testimonial-content">
                            <p className="text">
                             
                                "Stop wasting time and money designing and managing awebsite that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!"
                               
                            </p>
                            <h6 className="author-name"> Elon Musk, UIdeck</h6>
                           
                              
                            
                            <span className="sub-title">CEO, SpaceX</span>
                          </div>
                        </div>
                      </div>
                     
                     
                     
                     
                      <div
                        className="col-lg-4 slick-slide slick-cloned"
                        data-slick-index="-2"
                        aria-hidden="true"
                        tabindex="-1"
                        //   style="width: 380px;"
                      >
                        <div className="single-testimonial mt-30 mb-30 text-center">
                          <div className="testimonial-image">
                            <img src={authorTwo} alt="Author" />
                          </div>
                          <div className="testimonial-content">
                            <p className="text">
                             
                                "Stop wasting time and money designing and managing awebsite that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!"
                               
                            </p>
                            <h6 className="author-name"> "Lead Designer, UIdeck</h6>
                            <span className="sub-title">CEO, SpaceX</span>
                          </div>
                        </div>
                      </div>
                      
                      
                      
                      
                      
                      <div
                        className="col-lg-4 slick-slide slick-cloned"
                        data-slick-index="-1"
                        aria-hidden="true"
                        tabindex="-1"
                        //   style="width: 380px;"
                      >
                        <div className="single-testimonial mt-30 mb-30 text-center">
                          <div className="testimonial-image">
                            <img src={authorFour} alt="Author" />
                          </div>
                          <div className="testimonial-content">
                            <p className="text">
                           
                                "Stop wasting time and money designing and managing awebsite that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!"
                               
                            </p>
                            <h6 className="author-name"> Firoj, UIdeck</h6>
                            <span className="sub-title">CEO, MakerFlix</span>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  <ul
                    className="slick-dots"
                    // style={{display: 'block'}}
                    role="tablist"
                  >
                    <li className="slick-active" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control00"
                        aria-controls="slick-slide00"
                        aria-label="1 of 2"
                        tabindex="-1"
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation" className="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control01"
                        aria-controls="slick-slide01"
                        aria-label="2 of 2"
                        tabindex="-1"
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation" className="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control02"
                        aria-controls="slick-slide02"
                        aria-label="3 of 2"
                        tabindex="-1"
                      >
                        3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  // });
};

export default Testimonial;
