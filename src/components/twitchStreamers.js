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
    <button className="buttons" onClick={this.props.showAll}>All</button>
    <button className="buttons" onClick={this.props.showStreamers}>Online</button>
    <button className="buttons" onClick={this.props.showNonstreamers}>Offline</button>
    </div>
    </div>
  );
}
}

export default TwitchStreamers;
