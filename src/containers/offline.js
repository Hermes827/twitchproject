import React from 'react';
import User from '../components/user.js'

class Offline extends React.Component {

constructor(){
  super()
  }

  render(){
  return (
    <div>
      {
        this.props.nonStreamers.map((info) => {
          return <User info={info._links.self}/>
        })
      }
    </div>
  );
}
}

export default Offline;
