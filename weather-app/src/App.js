import React, { Component } from 'react';
import "./styles/main.css";


import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div className="weather-channel__container">
        <Header />
      </div>
    );
  }
}
