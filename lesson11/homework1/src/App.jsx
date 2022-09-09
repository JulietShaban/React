import React, { Component } from "react";
import Content from "./Content";
import Expand from "./Expand";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleContent: false,
    };
  }

  handleButton = () => {
    this.setState({
      visibleContent: !this.state.visibleContent,
    });
  };

  render() {
    const title = "Hooks information";

    return (
      <div className="app">
        <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">{title}</span>
            <Expand handleButton={this.handleButton} visibleContent={this.state.visibleContent} >
              <Content visibleContent={this.state.visibleContent} />
            </Expand>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
