import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class A extends Component {
  render() {
    return (
      <div class="search">
        <h1 class="search__title">{`Hello, ${this.props.name} What to search for you?`}</h1>
        <div class="search__field">
          <input type="text" class="search__input" />
          <button class="search__button">Search</button>
        </div>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{<A name="Bob" />}</React.StrictMode>);
