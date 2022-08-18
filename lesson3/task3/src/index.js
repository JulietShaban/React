



import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const style ={
  color: 'red', 
  fontWeight: 700
}

const element = (
  <div class="search">
  <h1 class="search__title">Hello, Tom. What to search for you?</h1>
  <div class="search__field">
      <input type="text" class="search__input" />
      <button class="search__button">Search</button>
  </div>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{element}</React.StrictMode>);
