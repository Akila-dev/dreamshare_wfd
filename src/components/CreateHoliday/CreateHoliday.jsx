import React from "react";
import "./createHoliday.css";

const CreateHoliday = () => {
  return (
    <div className="create_holiday">
      <h2 className="section-heading">Crate your holiday activity</h2>
      <p>Hi! What are your holiday interests?</p>
      <form action="">
        <input type="text" placeholder="Enter your interests" />
        <button className="rounded-button hover_grow_sm">
          Search partners
        </button>
      </form>
    </div>
  );
};

export default CreateHoliday;
