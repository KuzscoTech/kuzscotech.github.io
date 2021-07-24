import React, { Component } from "react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <header className="hero">
          <h1 className="hero-txt">
            Hi I am
            <span> Kushal Bhandari</span>
          </h1>
          <p className="h-sub-txt">
            A Computer Engineer currently studying at Cal Poly Pomona hoping to
            get into robotics and Artifical Inteligence
          </p>
          <div className="icons">
            <Link className="icon-link">
              <FontAwesomeIcon icon={faGithub} className="icon gh" />
            </Link>
            <Link className="icon-link">
              <FontAwesomeIcon icon={faInstagram} className="icon ig" />
            </Link>
            <Link className="icon-link">
              <FontAwesomeIcon icon={faLinkedin} className="icon lin" />
            </Link>
            <Link className="icon-link">
              <FontAwesomeIcon icon={faYoutube} className="icon yt" />
            </Link>
          </div>
        </header>
      </div>
    );
  }
}
