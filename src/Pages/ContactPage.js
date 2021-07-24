import React, { Component } from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/Title";
export class ContactPage extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <Title title={"Contact Me"} span={"Contact Me"} />
        </div>
        <div className="ContactPage">
          <div className="map-sect">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26420.341969355588!2d-118.05688106112848!3d34.13245403973652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2dbc5d3b8ca2b%3A0x4ca850dbd2ae298b!2sArcadia%2C%20CA!5e0!3m2!1sen!2sus!4v1620596547649!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-sect">
            <ContactItem
              icon={phone}
              text={"+1 909-362-7411"}
              title={"Phone Number: "}
            />
            <ContactItem
              icon={email}
              text={"Kuzscotech@gmail.com"}
              title={"Email"}
            />
            <ContactItem
              icon={location}
              text={"Arcadia, CA, 91007, USA"}
              title={"Location"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
