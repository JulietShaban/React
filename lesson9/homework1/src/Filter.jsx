import React from "react";

const Filter = ({ value, handleChange, count }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
