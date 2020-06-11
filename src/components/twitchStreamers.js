import React from 'react';

class TwitchStreamers extends React.Component {

constructor(){
  super()
  }

  render(){
  return (
    <div>
    <div className="twitchStreamers">
    <div className="bannerText">Twitch Streamers</div>
    </div>
    <div className="buttonsDiv">
    <button className="buttons">All</button>
    <button className="buttons">Online</button>
    <button className="buttons">Offline</button>
    </div>
    </div>
  );
}
}

export default TwitchStreamers;
