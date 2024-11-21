import React, { useState } from "react";
import axios from "axios";
import Timeslot from "./Timeslot";
import data from "./data.json";
import ExpertProfile from "./ExpertProfile";
import "./styles.css";

function ExpertBooking() {
  const [timeslot, settimeslot] = useState(false);
  const [loading, setloading] = useState(false);
  const [booked, setbooked] = useState(false);

  const handlechange = (e) => {
    settimeslot(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    const data = {
      first_name: e.target.elements["first"].value,
      last_name: e.target.elements["last"].value,
      email: e.target.elements["email"].value,
      time: e.target.elements["time"].value,
      location: e.target.elements["location"].value,
      date: e.target.elements["date"].value,
    };

    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        data
      );

      setbooked(true);
    } catch (err) {
      alert("Failed to post data");
    } finally {
      setloading(false);
    }
  };

  const handleClick = () => {
    setbooked(false);
  };
  return (
    <div className="container">
      {booked ? (
        <div>
          <h1>Appointment Boooked succesfully</h1>
          <button onClick={handleClick}>Cancel Appointemnt </button>
        </div>
      ) : loading ? (
        <div>
          <h1>Book a Session</h1>
          <p>
            Fill in the form below to book vitrtual session with your doctor
          </p>
          <p>Schdeuling the appointment....</p>
        </div>
      ) : (
        <div>
          <h1>Book Time with an Expert</h1>
          <div>
            <ExpertProfile expert={data.expert} />
          </div>
          <h3>Book a Session</h3>
          <p>
            Fill in the form below to book vitrtual session with your doctor
          </p>
          <p>Basic info</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>First name: </label>
              <input type="text" name="first" />
            </div>
            <div>
              <label>Last name: </label>
              <input type="text" name="last" />
            </div>
            <div>
              <label>Email: </label>
              <input type="email" name="email" />
            </div>
            <div>
              <label>Time Slots :</label>
              <select name="time" onChange={handlechange} defaultValue="select">
                <option value="select" disabled>
                  Select your time slot
                </option>
                <option disabled value="10:00 AM">
                  10:00 AM
                </option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option disabled value="3:00 PM">
                  3:00 PM
                </option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option disabled value="6:00 PM">
                  6:00 PM
                </option>
              </select>
              {timeslot == "11:00 AM" ||
              timeslot == "1:00 PM" ||
              timeslot == "4:00 PM" ||
              timeslot == "5:00 PM" ? (
                <Timeslot />
              ) : null}
              <div>
                <input type="submit" value="Confirm your Booking" />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ExpertBooking;
