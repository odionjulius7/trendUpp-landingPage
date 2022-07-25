import React from "react";
import Jumbotron from "../Components/Jumbotron";
import GuyImg from "../trendUpp/guyImg.png";
import ImageLady from "../trendUpp/imageLady.png";

export default function () {
  return (
    <div className="">
      <Jumbotron />
      <div className="col-md-12 first-section">
        <div className="container pt-5 pb-4">
          <div className="row list-flex d-flex">
            <div className="circle1">Podcasters</div>
            <div className="circle1">
              Content <br /> Creators
            </div>
            <div className="circle1">Visual Artists</div>
            <div className="circle1">
              Tutorials <br /> & Education
            </div>
            <div className="circle1">Visual Creators</div>
            <div className="circle1">Nonprofits</div>
          </div>
          {/* <div className="row"></div> */}
        </div>
      </div>
      <div className="col-md-12 second-section">
        <div className="container d-flex second-sec-content">
          <div className="col-md-7">
            <img src={GuyImg} class="img-fluid sec-img" alt="Guy" />
          </div>
          <div className="col-md-4">
            <h3 className="header-3 sec-head-3">Why influencer marketing</h3>
            <p className="sec-paragraph">
              {" "}
              Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam blanditiis harum quisquam
              eius sed odit fugiat iusto fuga praesentium
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 third-section">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="container third-sec-container">
          <p className="">
            <span style={{ paddingRight: "5px" }}>1.</span> Create An Account
          </p>
          <p>
            <span style={{ paddingRight: "5px" }}>2.</span> Invite Supporters To
            Yor Page
          </p>
          <p>
            <span style={{ paddingRight: "5px" }}>3.</span> Start receiving
            payments
          </p>
        </div>
      </div>
      <div className="col-md-12 forth-section">
        <div className="container forth-sec-content">
          <div className="col-md-6 forth-cont-paragraph">
            <p className="">
              <span style={{ paddingRight: "5px" }}>1.</span>create an account
            </p>
            <p className="">
              <span style={{ paddingRight: "5px" }}>2.</span>Invite Supporters
              to your page
            </p>
            <p className="">
              <span style={{ paddingRight: "5px" }}>3.</span>Start receiving
              payments
            </p>
            <button className="forth-sec-btn">
              <a
                href="https://trendupp.com/signup"
                className="a-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Sign up
              </a>
            </button>
          </div>
          <div className="col-md-6">
            <img src={ImageLady} class="img-fluid forth-sec-img" alt="lady" />
          </div>
          {/* </div> */}
        </div>
      </div>
      <div style={{ height: "150px" }} className="col-md-12"></div>
      <div style={{ background: "#F5F5F5" }} className="col-md-12 fift-section">
        <div className="container fift-section-cont">
          <div>
            <p className="fift-section-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore
            </p>
          </div>
          <div>
            <button className="fift-sect-1-btn">Join Today</button>
            <button className="fift-sect-2-btn">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="col-md-12 sixth-section">
        <div
          style={{ borderBottom: "1px solid gray", fontWeight: "700" }}
          className="container pt-1 my-5"
        >
          <div className="d-flex justify-content-between sixth-sec">
            <p className="">Mobile App</p>
            <p className="">Community</p>
            <p className="">Company</p>
            <p style={{ fontWeight: "200", fontSize: "1.5 rem" }} className="">
              Photo
            </p>
            <p className="">Help Desk</p>
            <p className="">Blog</p>
            <p className="">Resurces</p>
          </div>
        </div>
        <div className="container my-5">
          <p
            className="p-last"
            style={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontWeight: "400",
            }}
          >
            <span>&copy;</span> Photo, Inc. 2019. We love our users
          </p>
        </div>
      </div>
    </div>
  );
}
