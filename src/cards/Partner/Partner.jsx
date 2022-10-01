import React from "react";
import "./partner.css";

const Partner = ({ img, name, about }) => {
  return (
    <div class="partner_card">
      <div>
        <img src={img} alt="partner" />
      </div>
      <h3>{name}</h3>
      <p>{about}</p>
    </div>
  );
};

export default Partner;
