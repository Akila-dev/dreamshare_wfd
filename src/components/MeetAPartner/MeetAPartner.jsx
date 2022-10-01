import React from "react";
import "./meetAPartner.css";
import { Partner } from "../../cards";

import avatar1 from "../../images/Avatar1.png";
import avatar2 from "../../images/Avatar2.png";
import avatar3 from "../../images/Avatar3.png";
import avatar4 from "../../images/Avatar4.png";

const MeetAPartner = () => {
  return (
    <div class="meet_partner">
      <h2 class="section-heading">Meet a partner for your best holiday</h2>
      <div class="partners_container">
        <Partner
          img={avatar1}
          name="Bradley Hunter"
          about="Based in Chicago. I love playing tennis and loud music."
        />
        <Partner
          img={avatar2}
          name="Marie Bennett"
          about="Currently living in Colorado. Lover of art, languages and
            travelling."
        />
        <Partner
          img={avatar3}
          name="Diana Wells"
          about="Living in Athens, Greece. I love black and white classics, chillout
            music and green tea."
        />
        <Partner
          img={avatar4}
          name="Christopher Pierce"
          about="Star Wars fanatic. I have a persistent enthusiasm to create new
            things."
        />
      </div>
      <button class="rounded-button">See other partners</button>
    </div>
  );
};

export default MeetAPartner;
