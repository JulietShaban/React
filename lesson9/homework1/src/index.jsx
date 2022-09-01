import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UsersList from "./UsersList";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UsersList />
  </React.StrictMode>
);
