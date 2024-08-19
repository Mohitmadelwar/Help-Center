import React from "react";
import "./css/Footer.css";
import Logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid ">
        <div>
          Abstract
          <div>
            <h6>Branches</h6>
          </div>
        </div>

        <div>
          Resource
          <div>
            <h6>Blog</h6>
            <h6>Help center</h6>
            <h6>Release Note</h6>
            <h6>Status</h6>
          </div>
        </div>
        <div>
          Community
          <div>
            <h6>Twitter</h6>
            <h6>Linkedln</h6>
            <h6>Facebook</h6>
            <h6>Dribble</h6>
            <h6>Podcast</h6>
          </div>
        </div>
        <div>
          Company
          <div>
            <h6>About use</h6>
            <h6>Careers</h6>
            <h6>Legal</h6>
          </div>
          <h5>
            Contact us
            <h6>info@abstract.com</h6>
          </h5>
        </div>

        <div className="footer-logo">
          <img src={Logo}></img>
          <h6>© Copyright 2022</h6>
          <h6>Abstract Studio Design, Inc.</h6>
          <h6>All rights reserved</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
