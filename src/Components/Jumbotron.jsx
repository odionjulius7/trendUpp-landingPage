import React, { useState } from "react";
import Bubble from "../trendUpp/bubble.png";
import Vector from "../trendUpp/trenduppLogo.png";
import AppsLogo from "../trendUpp/appsLogo.png";
// import MobileMenu from "./MobileMenu";

import { Dropdown } from "react-bootstrap";

import { AiOutlineMenu } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";

export default function () {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="col-md-12 jumbo">
      <div className="container me-too">
        <nav className="navbar">
          <div className="container-fluid mt-3 nav-main-container">
            <div className="navbar-brand">
              <img src={Vector} class="jumbo-img-1" alt="logo" />
            </div>
            <div id="desktop-nav" className="menu-style">
              <a href="#">Awards</a>
              <a href="#">Pricing</a>
              <a href="#">Community</a>
              <a href="#">FAQ</a>
              <a href="#">Contact us</a>
              <a href="#">Join Today</a>
            </div>
            <AiOutlineMenu className="mb-icon" onClick={toggleMenu} />
            <div id={`${showMenu && "mobile"}`} className="mb-one">
              <BsXLg className="close-mb" onClick={toggleMenu} />

              <a href="#">Awards</a>
              <a href="#">Pricing</a>
              <a href="#">Community</a>
              <a href="#">FAQ</a>
              <a href="#">Contact us</a>
              <a href="#">Join Today</a>
            </div>
          </div>
        </nav>

        <div className="row d-flex jumbo-content">
          <div className="col-sm-6 one">
            <h1 className="header-1">
              Do what you love and get <br /> supported by your fans
            </h1>
            <div class="email-segment">
              <input className="email-input" placeholder="Your Email Address" />
              <button className="email-btn">Download the App</button>
            </div>
            <div className="icon-app-btn">
              <img className="my-4" src={AppsLogo} alt="" />
            </div>
          </div>
          <div className="col-sm two">
            <img src={Bubble} class="img-fluid jumbo-new-img ml-2" alt="lady" />
          </div>
        </div>
      </div>
    </div>
  );
}
