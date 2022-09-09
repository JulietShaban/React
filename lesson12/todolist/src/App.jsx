import React, { Component } from "react";
import ToDoList from "./ToDoList";
const App = () => {
  return (
    <>
      <ToDoList />
      <main className="todo-list">
        <div className="create-task">
          <input className="create-task__input" type="text" value="" />
          <button className="btn create-task__btn">Create</button>
        </div>
      </main>
    </>
  );
};

export default App;
