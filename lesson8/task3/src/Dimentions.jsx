import React, { Component } from "react";

class Dimentions extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);

    const { innerWidth, innerHeight } = window;
    this.setDimentions(innerHeight, innerWidth)
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.onResize);
  }

  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimentions(innerHeight, innerWidth);
  };

  setDimentions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    return (
      <div className="dimentions">
        {`${this.state.width} px - ${this.state.height} px`}
      </div>
    );
  }
}
export default Dimentions;
