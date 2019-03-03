import React, { Component } from 'react';
import Event from './Event.jsx';
import GameOfThrones from './GameOfThrones.jsx';
import MoodTracker from './MoodTracker.jsx';
import Asynchronous from './Asynchronous.jsx';
import Clock from './Clock.jsx';
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
        <MoodTracker />
        <Asynchronous />
        <Clock />
        </div>
      </div>
    );
  }
}

export default App;
