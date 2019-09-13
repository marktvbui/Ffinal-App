import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Trafficlight from "./components/Trafficlight/Trafficlight";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React</h1>
      </header>
      <h2>Last updated: {new Date().toLocaleTimeString()}.</h2>
      <Router>
        <Switch>
          <Route exact path="/trafficlight" component={Trafficlight} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
