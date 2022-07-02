import React from "react";
import logo from "../assets/logo.png";


function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <img src={logo} alt="logo" />
      </div>
      <div className="rightside">rightside</div>
    </div>
  );
}

export default Navbar;
