import React from "react";
import propTypes from "prop-types";

const Dialog = ({ isOpen, children, title, onClose }) => {
  if(!isOpen){
    return null
  }
  return (
    <div className="dialog">
    <div className="dialog_-heading">
        <div className="dialog__title">{title}</div>
        <button className="dialog__close-btn" onClick={onClose}>+</button>
    </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

Dialog.propTypes ={
  isOpen: propTypes.bool,
  children: propTypes.element.isRequired,
  title: propTypes.string,
  onClose: propTypes.func.isRequired
}
Dialog.defaultProps ={
  title: '',
  isOpen: false,
}

export default Dialog;
