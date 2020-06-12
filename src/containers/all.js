import React from 'react';
import User from '../components/user.js'

class All extends React.Component {

constructor(){
  super()
  }

  cool(){
    this.props.allStreams.forEach((info) => {
      return <User info={info._links.self}/>
    })
  }
  //so it turns out that "cool" function must use .map instead of forEach, otherwise
  //the data doesnt pass onto to <User/>. Secondly, the logic inside cool function
  //must be placed directly in the div thats inside the render itself, otherwise
  //it doesnt work

  random(info){
    if(info.stream === null){
      return
    } else {
      console.log(info.stream.channel.status)
    }
  }

  render(){

  return (
    <div className="all">
      {
        this.props.allStreams.map((info) => {
          this.random(info)
          return <User info={info._links.self}/>
        })
      }
    </div>
  );
}
}

export default All;
