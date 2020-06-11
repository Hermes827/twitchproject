import React from 'react';
import logo from './logo.svg';
import './App.css';
import All from './containers/all.js'
import Online from './containers/online.js'
import Offline from './containers/offline.js'
import TwitchStreamers from './components/twitchStreamers.js'
import User from './components/user.js'
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
    if(data.stream === null){
       this.setState({
         nonStreamers: [...this.state.nonStreamers, data],
         allStreams: [...this.state.allStreams, data]
       })
     } else {
       this.setState({
         streamers: [...this.state.streamers, data],
         allStreams: [...this.state.allStreams, data]
       })
     }
    });
    });
  }

  //it turns out that the reason that I wasnt able to access allStreams[0].stream
  //was because when the component is first mounted this.state.allStreams is empty
  //thats why I kept getting an error, in order to get around this have to use function
  //like this:

  // random(){
  //   if(this.state.allStreams.length === users.length){
  //     console.log(this.state.allStreams[7].stream)
  //   }
  // }

  //this way it doesnt trigger until the data is actually loaded and im not just
  //trying to call on an empty variable

  // random(){
  //   if(this.state.allStreams.length === users.length){
  //     this.state.allStreams.forEach((user) => {
  //       return(
  //         <User user={user}/>
  //       )
  //     });
  //   }
  // }

  renderAll(){
    if(this.state.allStreams.length === users.length){
      return(
        <All allStreams={this.state.allStreams}/>
      )
    }
  }

  render(){
  return (
    <div className="App">
      <TwitchStreamers/>
      {this.renderAll()}
    </div>
  );
}
}

export default App;
