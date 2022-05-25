import React, { useState } from "react";
import Bubble from "../trendUpp/bubble.png";
import Vector from "../trendUpp/trenduppLogo.png";
// import MobileMenu from "./MobileMenu";

import { Dropdown } from "react-bootstrap";

import { AiOutlineMenu } from "react-icons/ai";

export default function () {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    // console.log("hi");
  };

  return (
    <div className="col-md-12 jumbo">
      <div className="container">
        <nav className="navbar">
          <div className="container-fluid mt-3 nav-main-container">
            <a className="navbar-brand">
              <img src={Vector} class="img-fluid jumbo-img-1" alt="logo" />
            </a>
            <div id="desktop-nav" className="d-flex">
              <button className="btn btn-nav">Signup</button>
              <button className="btn btn-nav">Login</button>
              {/* <button className="btn btn-nav">Apps</button> */}

              <Dropdown>
                <Dropdown.Toggle variant id="dropdown-basic">
                  Apps
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Android</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">IOS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </nav>

        <div className="row d-flex jumbo-content">
          <div className="col-sm-6 one">
            <h1 className="header-1">
              Do what you love <br /> and get supported
              <br /> by your fans
            </h1>
            <button className="jumbo-down-btn">Sign up</button>
          </div>
          <div className="col-sm two">
            <img src={Bubble} class="img-fluid jumbo-new-img ml-2" alt="lady" />
          </div>
        </div>
      </div>
    </div>
  );
}
