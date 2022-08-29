import React from "react";
import ReactDOM from "react-dom/client";
import NumberList from "./NumberList";
import "./index.css";

const numbers = [1, 2, 3, 4, 5];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <NumberList />
  </React.StrictMode>
);
