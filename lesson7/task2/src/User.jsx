import React from "react";

const User = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li>
          <span className="user__name">{user.name}</span>
          <span className="user__age">{user.age}</span>
        </li>
      ))}
    </ul>
  );
};
export default User;
