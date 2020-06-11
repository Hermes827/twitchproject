import React from 'react';
import User from '../components/user.js'

class All extends React.Component {

constructor(){
  super()
  }

  cool(){
    this.props.allStreams.forEach((user) => {
      return <User user={user}/>
    })
    
  }

  render(){
  return (
    <div>
    fizzbuzz
    {this.cool()}
    </div>
  );
}
}

export default All;
