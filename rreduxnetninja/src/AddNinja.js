import React, { Component } from "react";

export default class AddNinja extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      belt: ''
    };
    this.bindEvents();
  }
  bindEvents() {
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit(e) {
      e.preventDefault();
      console.log('inside the handleSubmit method....');
      const { name, age, belt } = this.state;
      if(name && age && belt) {
          const ninja = {name,age,belt}
          this.props.addNinja(ninja);
          localStorage.setItem('ninja',JSON.stringify(ninja));
          this.setState({ name : '', age : '', belt : ''});
      }
  }
  render() {
      const { name, age, belt } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter the name"
            // name="name"
            id="name"
            value={name}
            onChange={this.onChange}
          />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            placeholder="Enter the age"
            // name="age"
            id="age"
            value={age}
            onChange={this.onChange}
          />
          <label htmlFor="belt">Belt</label>
          <input
            type="text"
            placeholder="Enter the belt color"
            // name="belt"
            id="belt"
            value={belt}
            onChange={this.onChange}
          />
          <button type="submit">Add a Ninja</button>
        </form>
      </div>
    );
  }
}
