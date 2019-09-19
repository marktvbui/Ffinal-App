import React from "react";
import Foot from "../../components/Footer/Footer";
import Body from "../../components/Body/Body";
import Header from "../../components/Header/Header";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Body />
        <Foot />
      </div>
    );
  }
}

export default Home;
