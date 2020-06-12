import React from 'react';

class User extends React.Component {

constructor(){
  super()
  }

  returnName(){
    var parser = document.createElement('a');
    parser.href = this.props.info
    return parser.pathname.slice(16)
  }

  render(){
  return (
    <div>
    {this.returnName()}
    </div>
  );
}
}

export default User;
