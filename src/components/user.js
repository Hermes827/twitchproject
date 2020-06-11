import React from 'react';

class User extends React.Component {

constructor(){
  super()
  }

  render(){
  return (
    <div>
    {console.log(this.props.user)}
    user
    </div>
  );
}
}

export default User;
