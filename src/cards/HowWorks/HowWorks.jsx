import React from "react";
import "./howWorks.css";

const HowWorks = ({ img, tag, title, text }) => {
  return (
    <div className="how_works-card">
      <img src={img} alt={title} />
      <div>
        <span>{tag}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HowWorks;
