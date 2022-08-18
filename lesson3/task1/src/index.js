



import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";




const Greeting = (props) => {
  console.log(props)
  return (
    <div className="search">
    <h1 className="search__title">{`Hello, &{props.name}. What to search for you?`}</h1>
    <div className="search__field">
        <input type="text" className="search__input" />
        <button class="search__button">Search</button>
    </div>
</div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

const elem = <Greeting  name: "Bob" /> ;
root.render(elem)
