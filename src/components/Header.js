import React from "react";
import worldIcon from "../images/world-icon.png";

function Header() {
  return (
    <section className="header--container">
      <img className="world--icon" src={worldIcon} alt="world-icon" />
      <h4 className="header--title">Lee's Travel Journal</h4>
      <img className="world--icon" src={worldIcon} alt="world-icon" />
    </section>
  );
}

export default Header;
