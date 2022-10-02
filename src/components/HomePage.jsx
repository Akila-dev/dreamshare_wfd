import React from "react";

import {
  Header,
  Footer,
  HowDreamshareWorks,
  MeetAPartner,
  CreateHoliday,
  DiscoverActivities,
} from "../components";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <HowDreamshareWorks />
        <MeetAPartner />
        <DiscoverActivities />

        <CreateHoliday />
      </div>
      <Footer />
    </div>
  );
};

export default App;
