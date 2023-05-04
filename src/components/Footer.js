import React from "react";
import linkedinIcon from "../images/linkedin.png";
import githubIcon from "../images/github.png";

function Footer() {
  return (
    <div className="card--footer">
      <small>© Lee Palmer</small>
      <div className="card--footer--icons">
        <a
          className="card--footer--icon"
          href="https://www.linkedin.com/in/lee-palmer-904404261/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>
        <a
          className="card--footer--icon"
          href="https://github.com/leep1000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="github icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
