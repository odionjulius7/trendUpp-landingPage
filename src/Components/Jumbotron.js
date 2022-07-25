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
              <button className="btn btn-nav">
                <a
                  href="https://trendupp.com/signup"
                  className="a-link"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Sign up
                </a>
              </button>
              <button className="btn btn-nav">
                {" "}
                <a
                  href="https://trendupp.com/login"
                  className="a-link"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </a>
              </button>
              {/* <button className="btn btn-nav">Apps</button> */}

              <Dropdown>
                <Dropdown.Toggle variant id="dropdown-basic">
                  Apps
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="https://play.google.com/store/apps/details?id=com.trendup.app">
                    Android
                  </Dropdown.Item>
                  <Dropdown.Item href="https://apps.apple.com/us/app/trendupp/id1502541954">
                    IOS
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </nav>

        <div className="row d-flex jumbo-content">
          <div className="col-sm-5 one">
            <h1 className="header-1">
              Do what you love <br /> and get supported
              <br /> by your fans
            </h1>
            <button className="jumbo-down-btn">
              <a
                href="https://trendupp.com/signup"
                className="a-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Sign up
              </a>
            </button>
          </div>
          <div className="col-sm two">
            <img src={Bubble} class="img-fluid jumbo-new-img ml-2" alt="lady" />
          </div>
        </div>
      </div>
    </div>
  );
}
