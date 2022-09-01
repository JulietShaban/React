import React, { Component } from "react";
import User from "./User";
import Filter from "./Filter";

class UsersList extends Component {
  state = {
    users: [
      {
        name: " Lina ",
        age: 45,
      },
      {
        name: " Ann ",
        age: 5,
      },
      {
        name: " Tim ",
        age: 28,
      },
      {
        name: " Tom ",
        age: 8,
      },
    ],
    filteredUsers: [],
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      filteredUsers: this.state.users.filter((item) =>
        item.name.toLowerCase().includes(e.target.value)
      ),
    });
  }

  render() {
    return (
      <div>
        <Filter handleChange={this.handleChange} value={this.state.value}  count={this.state.filteredUsers.length} />

        <ul className="users">
          {this.state.filteredUsers.length
            ? this.state.filteredUsers.map((item, index) => (
                <User
                  key={`${item.name}${index}`}
                  name={item.name}
                  age={item.age}
                />
              ))
            : this.state.users.map((item, index) => (
                <User
                  key={`${item.name}${index}`}
                  name={item.name}
                  age={item.age}
                />
              ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
