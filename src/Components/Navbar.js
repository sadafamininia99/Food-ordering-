import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <img src={logo} alt="logo" />
      </div>
      <div className="rightside">
        <Link to="/">Home</Link>
        <Link to="/menu">menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
