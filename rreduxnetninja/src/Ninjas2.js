import React, { Component } from 'react'

export default class Ninjas2 extends Component {
  render() {
    console.log(this.props);
    const { name, age,  belt } = this.props;
    return (
      <div>
        <h1>My name is {name}.My age is {age} and belt is {belt}</h1>
      </div>
    )
  }
}
