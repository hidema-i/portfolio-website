import React from "react";
import contactImage from "../assets/contactImage.jpg";
import "../styles/Contact.css";
const Contanct = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter Email..."
            type="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contanct;
