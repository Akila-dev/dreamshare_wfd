import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div class="header">
      {/* ?NAVBAR START */}
      <div class="navbar">
        <div class="navbar-flex container">
          <h1 class="logo">DREAMSHARE</h1>
          <div class="navbar-btn-container">
            <button> Log In </button>
            <button> Sign Up </button>
          </div>
        </div>
      </div>
      {/* ?NAVBAR END */}

      <div class="header-content container">
        <h1 class="logo">DREAMSHARE</h1>
        <h1>SHARE YOUR HOLIDAY DREAM</h1>
        <h2>And find the perfect partner to fullfill it</h2>
        <button class="rounded-button">Find your holiday partner</button>
      </div>
    </div>
  );
};

export default Header;
