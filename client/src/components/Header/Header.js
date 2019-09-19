import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a href="./" className="brandName">
          <strong>Mark Bui</strong>
        </a>
        <nav className="navLinks">
          <a href="/">Home</a>
          <a href="/test">Test</a>
          <a href="/trafficlight">Traffic</a>
        </nav>
      </div>
    );
  }
}

export default Header;
