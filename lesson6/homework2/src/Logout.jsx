import React from "react";

const LogOut = ({onLogOut}) => {
  return (
    <div>
      <button class="logout btn" onClick={onLogOut}>Logout</button>
    </div>
  );
};

export default LogOut;
