import React from "react";
import "./createHoliday.css";

const CreateHoliday = () => {
  return (
    <div class="create_holiday">
      <h2 class="section-heading">Crate your holiday activity</h2>
      <p>Hi! What are your holiday interests?</p>
      <form action="">
        <input type="text" placeholder="Enter your interests" />
        <button class="rounded-button">Search partners</button>
      </form>
    </div>
  );
};

export default CreateHoliday;
