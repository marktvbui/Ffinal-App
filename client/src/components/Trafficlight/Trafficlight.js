import React from "react";
import "./light.css";

class Trafficlight extends React.Component {
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: false
    };
  }

  addActiveClass() {
    const currentState = this.state.active;
    console.log(currentState);
    this.setState({
      active: true
    });
  }

  render() {
    var lights = ["red", "yellow", "green"];
    return (
      <div className="box">
        {lights.map((light, index) => (
          <div
            className={this.state.active === true ? "light active" : "light"}
            id={light}
            key={index}
            onClick={() => this.addActiveClass()}
          ></div>
        ))}
      </div>
    );
  }
}

export default Trafficlight;
