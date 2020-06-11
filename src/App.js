import React from 'react';
import logo from './logo.svg';
import './App.css';
const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

class App extends React.Component {

constructor(){
  super()
  this.state = {
    streamers: [],
    nonStreamers: []
  }
  }

  random(arr){
    arr.forEach((name) => {
      fetch(`https://wind-bow.glitch.me/twitch-api/streams/${name}`)
  .then(response => response.json())
  .then(data => console.log(data));
    });

  }


  render(){
  return (
    <div className="App">
    hi
    {this.random(users)}
    {console.log(this.state)}
    </div>
  );
}
}

export default App;
