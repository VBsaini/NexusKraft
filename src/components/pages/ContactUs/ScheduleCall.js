import React, { useState } from "react";
import "./ScheduleCall.css";

const ScheduleCall = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hour, setHour] = useState("4");
  const [minute, setMinute] = useState("15");
  const [amPm, setAmPm] = useState("PM");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedTime = `${hour}:${minute} ${amPm}`;
    alert(
      `Name: ${name}\nPhone: ${phoneNumber}\nDate: ${date}\nTime: ${selectedTime}`
    );
  };

  return (
    <div className="schedule-call-container">
      <h2>Schedule a call with us</h2>
      <p>Schedule a call and kickstart your journey to success!</p>
      <form onSubmit={handleSubmit} className="schedule-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <div className="time-selection">
          <select value={hour} onChange={(e) => setHour(e.target.value)}>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <span>Hr</span>
          <select value={minute} onChange={(e) => setMinute(e.target.value)}>
            {["00", "15", "30", "45"].map((min) => (
              <option key={min} value={min}>
                {min}
              </option>
            ))}
          </select>
          <span>Min</span>
          <select value={amPm} onChange={(e) => setAmPm(e.target.value)}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Book Call</button>
      </form>
    </div>
  );
};

export default ScheduleCall;
