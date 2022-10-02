import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      {/* ?NAVBAR START */}
      <div className="navbar">
        <div className="navbar-flex container">
          <h1 className="logo">DREAMSHARE</h1>
          <div className="navbar-btn-container">
            <button> Log In </button>
            <button> Sign Up </button>
          </div>
        </div>
      </div>
      {/* ?NAVBAR END */}

      <div className="header-content container">
        <h1 className="logo">DREAMSHARE</h1>
        <h1>SHARE YOUR HOLIDAY DREAM</h1>
        <h2>And find the perfect partner to fullfill it</h2>
        <button className="rounded-button hover_grow">
          Find your holiday partner
        </button>
      </div>
    </div>
  );
};

export default Header;
