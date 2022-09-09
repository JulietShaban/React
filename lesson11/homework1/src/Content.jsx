import React from "react";

const Content = ({ visibleContent }) => {
  
  if (visibleContent) {
    return (
     
        <p>
          Hooks are a new addition in React 16.8. They let you use state and
          other React features without writing a class.
        </p>
      
    );
  } else {
    return null;
  }
};

export default Content;
