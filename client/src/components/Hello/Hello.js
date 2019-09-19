import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import "./hello.css";

const Hello = () => {
  return (
    <div className="helloApp">
      <header className="helloHeader">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello react</h1>
      </header>
    </div>
  );
};

export default Hello;
