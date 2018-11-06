import React, { Component } from 'react'
import AuthContext from '../auth-context';

class Profile extends Component {
  
  // Set up the contextType 
  static contextType = AuthContext;
  render() {
    return (
      <div>
        <h1>{this.context.isAuth ? 'You are logged in !' : 'You are logged out !' }</h1>
      </div>
    )
  }
}

export default Profile;