import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "./ScheduleCall.css";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "react-bootstrap";

const ScheduleCall = (props) => {
  const { page } = props;
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hour, setHour] = useState("4");
  const [minute, setMinute] = useState("15");
  const [amPm, setAmPm] = useState("PM");
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedTime = `${hour}:${minute} ${amPm}`;
    alert(
      `Name: ${name}\nPhone: ${phoneNumber}\nDate: ${date}\nTime: ${selectedTime}`
    );
  };

  return (
    <Container className="schedule-call-container">
      {page != "abt" ? (
        <>
          <h2 className="schedule-call-heading">Schedule a call with us</h2>
          <p>Schedule a call and kickstart your journey to success!</p>
        </>
      ) : (
        <>
          <h2 className="schedule-call-heading">
            <span className="BlueT">Want to discuss your new project?</span>{" "}
            Schedule a call with us!
          </h2>
        </>
      )}
      <div>
        <form onSubmit={handleSubmit} className="schedule-form">
          <div className="schedule-call-inputContainer">
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
              <div className="selectContainer">
                <select value={hour} onChange={(e) => setHour(e.target.value)}>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <span>Hr</span>
              </div>
              <div className="selectContainer">
                <select
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                >
                  {["00", "15", "30", "45"].map((min) => (
                    <option key={min} value={min}>
                      {min}
                    </option>
                  ))}
                </select>
                <span>Min</span>
              </div>
              <div className="selectContainer amPm">
                <select value={amPm} onChange={(e) => setAmPm(e.target.value)}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
        </form>
        <button type="submit" className="bookBtn">
          Book Call
        </button>
      </div>
    </Container>
  );
};

export default ScheduleCall;
