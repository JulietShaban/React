import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "offline",
    };
  }
  componentDidMount() {
    this.swithcer();
  }
  componentDidUpdate() {
    this.turner();
  }
  swithcer() {
    if (window.navigator.onLine) {
      this.setState({
        status: "online",
      });
    }
  }
  turner() {
    if (!window.navigator.onLine) {
      return this.setState({
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
