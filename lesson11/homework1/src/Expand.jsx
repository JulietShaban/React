import React from "react";

const Expand = ({ handleButton, visibleContent, children }) => {
  console.log(11, visibleContent);
  return (
    <>
      <button className="expand__toggle-btn" onClick={handleButton}>
        <i className="fas fa-chevron-down"></i>
      </button>
      <div className="expand__content">{children}</div>
    </>
  );
};

export default Expand;
