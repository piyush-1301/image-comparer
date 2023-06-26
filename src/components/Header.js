import React from "react";
import logo from "../images/logo.png";
import './Header.css';

function Header() {
  return (
    <div className="bar">
      <a className="heading">Image<span style={{color:'#1E90FF', fontFamily: `'Courier New', monospace`}}>Checker</span></a>
    </div>
  );
}

export default Header;
