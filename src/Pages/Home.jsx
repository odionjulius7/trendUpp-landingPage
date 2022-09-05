import React from "react";
import Jumbotron from "../Components/Jumbotron";
import GuyImg from "../trendUpp/guyImg.png";
import ImageLady from "../trendUpp/imageLady.png";
import TrendUppLight from "../trendUpp/TrendUppLight.png";

export default function () {
  return (
    <div className="">
      <Jumbotron />
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
      <div style={{ minHeight: "367px" }} className="sectionNewOne">
        <div className="col-md-12 d-flex moo">
          <div className="col-md footerLogo">
            <div className="TrendUppLight">
              <img src={TrendUppLight} alt="" />
            </div>
            <div className="footerLogoDetails">
              <p>News</p>
              <p>Partners</p>
              <p>About us</p>
              <p>Contact Us</p>
              <p>Terms And Condition</p>
            </div>
          </div>
          <div className="col-md footerSocial">
            <h2>Social</h2>
            <div className="footerSocialDetails">
              <p>facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Youtube</p>
            </div>
          </div>
          <div className="col-md footerService">
            <h2>Services</h2>
            <div className="footerService">
              <p>Pricing</p>
              <p>community</p>
              <p>feedback</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="col-md footerActivity">
            <h2>Activity</h2>
            <div className="footerActivity">
              <p>Influencer</p>
              <p>Affiliate</p>
              <p>Awards</p>
            </div>
          </div>
          <div className="col-md footerSubscribe">
            <h2>Subscribe More Info</h2>
            <div className="footerSubscribeInput">
              <input
                type="text"
                placeholder="identical to box height, or 100%"
              />
              <span>Subscribe</span>
            </div>
          </div>
        </div>
        <div className="col-md-10 footerCopyRight mt-5 mb-2">
          {/* <p className="ftCopyRight">identical to box height, or 100%</p> */}
          <p>Copyright 2022, Trendupp</p>
        </div>
      </div>
    </div>
  );
}
