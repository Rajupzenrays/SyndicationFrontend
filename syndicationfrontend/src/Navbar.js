import React from 'react'
// import  { Link } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link";
import logo from './assets/images/logo.svg'

const Navbar = () => {
     return (
          <div className="navgition navgition-transparent sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Link className=" text-decoration-none navbar-brand" smooth to="#home">
                  <img  className="navbar-brand" src={logo} alt="Logo" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarOne"
                    aria-controls="navbarOne"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarOne"
                  >
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item active">
                        <Link className=" text-decoration-none page-scroll" smooth to="#home">
                          HOME
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className=" text-decoration-none page-scroll" smooth to="#service">
                          SERVICES
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link  className=" text-decoration-none page-scroll" smooth to="#pricing">
                          PRICING
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link  className=" text-decoration-none page-scroll" smooth to="#testimonial">
                          Testimonial
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link  className=" text-decoration-none page-scroll" smooth to="#contact">
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar-social d-none d-sm-flex align-items-center">
                    <span>FOLLOW US</span>
                    <ul className="m-auto">
                      <li>
                        <Link to="/">  
                        <i className="lni-facebook-filled"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">  
                        <i className="lni-twitter-original"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">  
                        <i className="lni-instagram-original"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">  
                        <i className="lni-linkedin-original"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
     )
}

export default Navbar
