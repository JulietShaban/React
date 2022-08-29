import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ConnectionStatus from "./ConnectionStatus";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <ConnectionStatus />
  </React.StrictMode>
);
