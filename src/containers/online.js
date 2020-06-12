import React from 'react';
import User from '../components/user.js'

class Online extends React.Component {

constructor(){
  super()
  }

  render(){
  return (
    <div>
      {
        this.props.streamers.map((info) => {
          return <User info={info._links.self}/>
        })
      }
    </div>
  );
}
}

export default Online;
