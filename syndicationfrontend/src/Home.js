import React from "react";
import "./App.css";

import shape from "./assets/images/header-shape.svg";
import headerbg from "./assets/images/header-bg.jpg";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="header-area">
      <div
        id="home"
        className="header-hero bg_cover"
        style={{ backgroundImage: `url(${headerbg})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="header-content text-center">
                <h3 className="header-title">
                  Handcrafted Landing Page for Startups and SaaS Businesses
                </h3>
                <p className="text">
                  A simple, customizable, and, beautiful SaaS business focused
                  landing page to make your project closer to launch!
                </p>
                <ul className="header-btn rounded-buttons">
                  <li>
                    <Link
                      className="main-btn text-decoration-none rounded-three"
                      to="/"
                    >
                      GET IN TOUCH
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="main-btn text-decoration-none rounded-four video-popup"
                      to="/./../watch.html?v=r44RKWyfcFw"
                    >
                      WATCH THE VIDEO <i className="lni-play"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-shape">
          <img src={shape} alt="shape" />
        </div>
      </div>
    </header>
  );
};

export default Home;
