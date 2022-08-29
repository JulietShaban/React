import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }
  componentDidMount() {
    this.checkup = window.addEventListener('offline', (event)=> {
      console.log('im here')
      this.setState({
        status: false,
      })
    })
    }
  
  componentDidMount() {
    this.setState({
      status: true
    })
  }

  
  render() {
    if (this.state.status) {
      return <div className="status">Online</div>;
    }
    return <div className="status status_offline">Offline</div>;
  }
}

export default ConnectionStatus;
