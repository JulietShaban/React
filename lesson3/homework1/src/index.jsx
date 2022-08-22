import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const findAge = (date) => {
  const birthDate = new Date(date)
  const bday = birthDate.valueOf()
  const currentDate = new Date().getTime();
  console.log(bday, currentDate);
  const age = currentDate - bday;
  return age;
};

class A extends Component {
  render() {
    return (
      <div className="greeting">
        {`My name is ${this.props.firstname} ${this.props.surname}. I'm ${this.props.age} years old`}
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {<A firstname="Juliet" surname="Shaban" age={findAge(new Date(1994, 0, 16))} />}
  </React.StrictMode>
);
