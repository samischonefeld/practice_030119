import React from 'react';

function Clock(props){
  return(
    <div>
      <h1>React LifeCycle</h1>
      <h2> It is {props.date.toLocalTimeString()}.</h2>
    </div>
    )
}

export default Clock;
