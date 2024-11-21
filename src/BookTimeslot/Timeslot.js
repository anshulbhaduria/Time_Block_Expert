import React from "react";

function Timeslot() {
  return (
    <div className="timeslot">
      <label>Where:</label>
      <div className="radio-group">
        <label>
          <input type="radio" name="location" value="GoogleMeet" /> Google Meet
        </label>
        <label>
          <input type="radio" name="location" value="Phone" /> Phone
        </label>
      </div>
      <div>
        <label htmlFor="">
          When?
          <input type="date" name="date" />
        </label>
      </div>
    </div>
  );
}

export default Timeslot;
