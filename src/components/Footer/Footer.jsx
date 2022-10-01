import React from "react";
import "./footer.css";
import aretoImg from "../../images/Areto.png";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="footer_contents">
          <h1>DREAMSHARE</h1>
          <div class="footer_quicklinks">
            <h4>Company</h4>
            <div>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Press</a>
              <a href="/">Blog</a>
              <a href="/">Terms and Privacy</a>
              <a href="/">Help</a>
            </div>
          </div>
          <h4>Partners</h4>
          <div>
            <h3>DESIGNED BY</h3>
            <img class="areto-img" src={aretoImg} alt="Areto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
