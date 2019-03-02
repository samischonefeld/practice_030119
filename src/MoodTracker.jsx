import React, {Component} from 'react';

class MoodTracker extends Component{
  state = {
    moodPoints : 1
  }

  increaseMood = () => {
    this.setState({
      moodPoints: this.state.moodPoints + 1
    });
  };

  decreaseMood = () => {
    this.setState({
      moodPoints: this.state.moodPoints - 1
    });
  };

  resetMood = () => {
    this.setState({
      moodPoints: 1
    });
  };

  render(){
    return(
      <div>
        <h1>This is the Mood Tracker Component that will demonstrate STATE </h1>
        <p>This is your mood points (set by state): {this.state.moodPoints}</p>
        <button onClick = {this.increaseMood}>Increase Mood</button>
        <button onClick = {this.decreaseMood}>Decrease Mood</button>
        <button onClick = {this.resetMood}>Reset Mood</button>
      </div>
    )
  }
}

export default MoodTracker
