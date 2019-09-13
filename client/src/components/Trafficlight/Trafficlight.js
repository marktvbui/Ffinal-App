import React from "react";
import "./light.css";

class Trafficlight extends React.Component {
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      light: "red"
    };
  }

  addActiveClass(light) {
    this.setState({
      light: light
    });
  }

  render() {
    var lights = ["red", "yellow", "green"];
    return (
      <div className="box">
        {lights.map((light, index) => (
          <div
            className={`light ${this.state.light === light ? light : null}`}
            key={index}
            onClick={() => this.addActiveClass(light)}
          ></div>
        ))}
      </div>
    );
  }
}

export default Trafficlight;
