import React, { Component } from 'react';

class Asynchronous extends Component{
  state = {
    theButton: ''
  }

  asynchronousButton = () => {
    console.log(this.state.theButton)
    this.setState({
          theButton: 'this is first asynchronous event'
        })
    console.log(this.state.theButton)
    }

  render(){
    return(
        <div>
          <h1>This is Asynchronous</h1>
          <button onClick ={this.asynchronousButton}>Asynchronous Button Test</button>
          <p>rendering console.log here {this.state.theButton}</p>
        </div>
      )
  }
}


export default Asynchronous;
