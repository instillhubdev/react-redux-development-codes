import React from 'react';

const profile = props => (
  <h1>{props.authenticated? 'You are logged in!' : 'You are logged out !' }</h1>
);

export default profile;