import React from 'react';
import logo from './logo.svg';
import './App.css';
const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

class App extends React.Component {

constructor(){
  super()
  this.state = {
    streamers: [],
    nonStreamers: [],
    allStreams: []
  }

  }

  componentDidMount(){
    users.forEach((name) => {
      fetch(`https://wind-bow.glitch.me/twitch-api/streams/${name}`)
  .then(response => response.json())
  .then(data => {
    this.random(data)
    });
    });
  }

  //it turns out that the reason I couldnt access allstreams[0].stream period was because I was setting state
  //in the same function as fetch,  its the same thing that happened with the weather project. Apparently I have
  //to setstate outside of fetch

  random(data){
    this.setState({
      allStreams: [...this.state.allStreams, data]
    })
  }


  render(){
  return (
    <div className="App">
    hi
    {console.log(this.state.allStreams[3])}
    </div>
  );
}
}

export default App;
