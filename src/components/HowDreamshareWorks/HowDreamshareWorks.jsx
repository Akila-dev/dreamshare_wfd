import React from "react";
import "./howDreamshareWorks.css";

import { HowWorks } from "../../cards";

import how1 from "../../images/How dreamshare works 1.png";
import how2 from "../../images/How dreamshare works 2.png";
import how3 from "../../images/How dreamshare works 3.png";

const HowDreamshareWorks = () => {
  return (
    <div class="how_works">
      <h2 class="section-heading">How Dreamshare Works?</h2>
      <div class="card_container">
        <HowWorks
          img={how1}
          tag="STEP 1"
          title="Sed leo enim, condimentum"
          text="Quisque libero libero, dictum non turpis in, luctus semper lorem.
              Donec rhoncus a leo sit amet facilisis."
        />
        <HowWorks
          img={how2}
          tag="STEP 2"
          title="Morbi velit risus"
          text="Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
        />
        <HowWorks
          img={how3}
          tag="STEP 3"
          title="Sed leo enim, condimentum"
          text="Quisque libero libero, dictum non turpis in, luctus semper lorem.
              Donec rhoncus a leo sit amet facilisis."
        />
      </div>
    </div>
  );
};

export default HowDreamshareWorks;
