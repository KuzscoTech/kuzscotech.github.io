import React from "react";
import about from "../img/about.png";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span> Kushal Bhandari</span>
        </h4>
        <p className="about-txt">
          Hello I am currently a 3rd Year CPP Student studying Computer
          Engineering with an Emphasis on Embedded Systems & Digital
          Logic/Hardware Design. My passion for robotics and hardware came from
          highschool when I competed in Robotics Competitions such as JPL and
          FIRST Robotics. I have extensive knowledge in Karnuagh Maps, Truth
          Tables, KiCad and Logisim. All tools used to help design circuits and
          memoryboards. Down below are all the skills I currently posses with a
          lvl of proficiency.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Gender</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Kushal Bhandari</p>
            <p>: 22</p>
            <p>: Male</p>
            <p>: Nepalese</p>
            <p>: Nepali, English, Hindi, Spanish</p>
            <p>: Arcadia, CA, 91007, USA</p>
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  );
}

export default ImageSection;
