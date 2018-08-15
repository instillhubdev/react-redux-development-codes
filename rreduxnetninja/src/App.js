import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

export default class App extends Component {
  state = {
    ninjas: []
  };
  componentDidMount() {
    if (localStorage.getItem("ninjas")) {
      const ninjas = JSON.parse(localStorage.getItem('ninjas'));
      this.setState({ ninjas : ninjas});
    }
  }
  addNinja = ninja => {
    // const { ninjas } = this.state;
    const ninjas = [ninja, ...this.state.ninjas];
    this.setState({
      ninjas: ninjas
    });
    localStorage.setItem("ninjas", JSON.stringify(ninjas));
  };

  render() {
    const { ninjas } = this.state;
    return (
      <div>
        <AddNinja addNinja={this.addNinja} />
        {ninjas.map(({ name, age, belt, id }) => (
          <Ninjas key={id} name={name} age={age} belt={belt} />
        ))}
      </div>
    );
  }
}
