import React, { Component } from 'react';
import Event from './Event.jsx';
import GameOfThrones from './GameOfThrones.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi This is my practice React project</h1>
        <p> practice practice practice</p>
        <div>
        <Event title = "This is the Title Prop" />
        <GameOfThrones />
        </div>
      </div>
    );
  }
}

export default App;
