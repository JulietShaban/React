import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "online",
    };
  }
  componentDidMount() {
    this.Swithcer();
  }

  componentDidMount() {
    this.Swithcer();
  }
  Swithcer() {
    if (window.navigator.onLine) {
      this.setState({
        status: "online",
      });
    } else {
      this.setState({
        status: "offline",
      });
    }
  }
  render() {
    if (this.state.status === "online") {
      return <div className="status">Online</div>;
    }
    return <div className="status status_offline">Offline</div>;
  }
}

export default ConnectionStatus;
