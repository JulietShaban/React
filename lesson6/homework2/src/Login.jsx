import React from "react";

const LogIn = ({onLogin}) => {
  return (
    <div>
      <button className="login btn" onClick={onLogin}>Login</button>
    </div>
  );
};

export default LogIn;
