import React from "react";
import "./discoverActivities.css";

import activity1 from "../../images/Activity 1.png";
import activity2 from "../../images/Activity 2.png";
import activity3 from "../../images/Activity 3.png";
import activity4 from "../../images/Activity 4.png";
import activity5 from "../../images/Activity 5.png";
import activity6 from "../../images/Activity 6.png";
import activity7 from "../../images/Activity 7.png";

const DiscoverActivitiesCard = ({ img, title }) => (
  <div class="discover-card">
    <img src={img} alt="Holiday Activities" />
    <div>
      <h3>{title}</h3>
    </div>
  </div>
);

const DiscoverActivities = () => {
  return (
    <div class="discover">
      <h2 class="section-heading">Discover holiday activity ideas</h2>
      <div class="discover-card_container">
        <DiscoverActivitiesCard img={activity1} title="Sports and activis" />
        <DiscoverActivitiesCard img={activity3} title="Wellness and Health" />
        <DiscoverActivitiesCard
          img={activity2}
          title="Extreme Sports and Expeditions"
        />
        <DiscoverActivitiesCard img={activity4} title="Games" />
        <DiscoverActivitiesCard img={activity5} title="Culture and Education" />
        <DiscoverActivitiesCard
          img={activity6}
          title="Enjomet and Relaxation"
        />
        <DiscoverActivitiesCard img={activity7} title="Travelling" />
      </div>
    </div>
  );
};

export default DiscoverActivities;
