import React from "react";

const Task = ({ onDelete, id, done, text, onChange}) => {
    const listIemClasses = `list-item ${done ? 'list-item_done' : ''}`;
  return (
    <li className={listIemClasses}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button onClick={() => onDelete(id)} className="list-item__delete-btn"></button>
    </li>
  );
};
export default Task;
