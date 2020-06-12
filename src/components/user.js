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
  //this is a quick and dirty method, need to revise this later to use a proper regex

  render(){
  return (
    <div className="user">
    {this.returnName()}
    </div>
  );
}
}

export default User;
