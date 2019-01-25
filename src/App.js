import React, { Component } from "react";

import Header from "./components/Header";
import DisplayWeather from "./components/DisplayWeather";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DisplayWeather />
      </div>
    );
  }
}

export default App;
