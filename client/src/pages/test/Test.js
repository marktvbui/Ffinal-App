import React from "react";
import Trafficlight from "../../components/Trafficlight/Trafficlight";
import Header from "../../components/Header/Header";
import Foot from "../../components/Footer/Footer";
import "./test.css";

const Test = () => {
  return (
    <div className="test">
      <Header></Header>
      <Trafficlight></Trafficlight>
      <Foot></Foot>
    </div>
  );
};

export default Test;
