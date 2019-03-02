import React, { Component } from 'react';

class Event extends Component{
  render(){
    return(
      <div>
        <h3> This is where my event goes - make sure you encompass your return in a div</h3>
        <h4> This is rendering props : {this.props.title}</h4>
      </div>
      )
  }
}

export default Event;
