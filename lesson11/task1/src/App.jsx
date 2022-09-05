import Number from "./Numbers";
import React, { Component } from "react";
import EvenNumbers from "./EvenNumbers";
import OddNumbers from "./OddNumbers";

class App extends Component {
  state = {
    number: 0,
  };
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <Number title="All numbers" number={this.state.number} />
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <OddNumbers title="Odd numbers" number={this.state.number} />
        <Number title="All numbers" number="4" />
      </div>
    );
  }
}

export default App;
