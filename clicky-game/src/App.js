import React, { Component } from "react";
import figure from "./figure.json";
import './App.css';

class App extends Component {
  state = {
    figure,
    clickedFigure: [],
    score: 0
  };

}

export default App;
