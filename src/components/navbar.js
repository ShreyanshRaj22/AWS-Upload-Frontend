import React from "react";
import IconUser from "../images/user.png";
import IconPlus from "../images/plus.png";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div className="navbar-icon">
        <img src={IconUser} alt="" />
      </div>
      <h1>{props.heading}</h1>
      <div className="navbar-icon">
        <img src={IconPlus} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
