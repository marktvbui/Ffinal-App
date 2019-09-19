import React from "react";
import "./body.css";
import Hello from "../Hello/Hello";

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <Hello></Hello>
      </div>
    );
  }
}

export default Body;
