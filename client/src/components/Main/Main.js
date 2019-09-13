import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Trafficlight from "../Trafficlight/Trafficlight";
import Test from "../../pages/test/Test";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/test" component={Test}></Route>
      <Route exact path="/trafficlight" component={Trafficlight}></Route>
    </Switch>
  );
};

export default Main;
