import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import emailjs from "@emailjs/browser";
import "./ScheduleCall.css";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const ScheduleCall = (props) => {
  const [canSubmit, setCanSubmit] = useState(true);
  const [submissionTimestamp, setSubmissionTimestamp] = useState(null);

  const { page } = props;
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hour, setHour] = useState("4");
  const [minute, setMinute] = useState("15");
  const [amPm, setAmPm] = useState("PM");
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const storedTimestamp = Cookies.get("contactFormSubmission");
    if (storedTimestamp) {
      const timestamp = parseInt(storedTimestamp, 10);
      const now = Date.now();
      const diff = (now - timestamp) / 1000 / 60 / 60; // convert to hours
      if (diff < 12) {
        setCanSubmit(false);
      }
    }
  }, []);

  function sendEmail(e) {
    console.log("Sending email");
    e.preventDefault();
    if (!name || !phoneNumber) {
      toast.error("Please fill all the fields");
      return;
    }
    let time = `${hour}:${minute} ${amPm}`;
    let date = startDate.toDateString();
    let templateParams = {
      name: name,
      phone: phoneNumber,
      date: date,
      time: time,
    };
    if (canSubmit) {
      // submit the form
      const timestamp = Date.now();
      Cookies.set("contactFormSubmission", timestamp.toString(), {
        expires: 12 / 24,
      }); // expires in 12 hours
      // emailjs
      //   .send(
      //     "service_fp4wivm",
      //     "template_e8t5fg9",
      //     templateParams,
      //     "-tm-YF-mN7dIuk3oH"
      //   )
      //   .then(
      //     () => {
      //       console.log("SUCCESS!");
      //     },
      //     (error) => {
      //       console.log("FAILED...", error);
      //     }
      //   );
      setCanSubmit(false);
      console.log("Cookies set");
    } else {
      toast.error(
        "It seems you submitted the form recently. Rest assured the team will reach out to you."
      );
    }
    // reactCookie.save("token", "token-value", {
    //   maxAge: 43200, // Will expire after 1hr (value is in number of sec.)
    // });
    // emailjs
    //   .send(
    //     "service_fp4wivm",
    //     "template_e8t5fg9",
    //     templateParams,
    //     "-tm-YF-mN7dIuk3oH"
    //   )
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error);
    //     }
    //   );
  }

  return (
    <Container className="schedule-call-container" id="Contact">
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
        {/* cookies */}
        <ToastContainer />
        <form onSubmit={sendEmail} className="schedule-form">
          <div className="schedule-call-inputContainer">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Phone Number"
              pattern="[1-9]{1}[0-9]{9}"
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
            wrapperClassName="datePicker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
        </form>
        <button type="submit" onClick={sendEmail} className="bookBtn">
          Book Call
        </button>
      </div>
    </Container>
  );
};

export default ScheduleCall;
