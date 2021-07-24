import React from "react";

function ContactItem({ icon, text, title }) {
  return (
    <div className="contact-container">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-item">
          <h6>{title}</h6>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
