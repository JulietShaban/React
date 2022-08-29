import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Yulia",
    };
  }

  changeState = () => {
    this.setState({
      name: "Maksym",
    });
  };

  render() {
    console.log(this.state.name); // Maksym
    return <Comp2 name={this.state.name} changeState={this.changeState} />;
  }
}

class Comp2 extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.changeState();
        }}
      >
        {this.props.name}
      </div>
    ); // Yulia
  }
}

root.render(
  <React.StrictMode>
    <Comp />
  </React.StrictMode>
);
