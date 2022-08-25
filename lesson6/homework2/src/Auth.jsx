import React, { Component } from "react";
import LogIn from "./Login";
import LogOut from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSpinner: false,
      isLogout: false,
      isLogin: true,
    };
  }

  onLogOut = () => {
    this.setState({
      isLogout: false,
      isLogin: false,
      isSpinner: true,
    });

    setTimeout(() => {
      this.setState({
        isLogout: false,
        isSpinner: false,
        isLogin: true,
      });
    }, 2000);
  };

  onLogin = () => {
    this.setState({
      isLogout: false,
      isLogin: false,
      isSpinner: true,
    });

    setTimeout(() => {
      this.setState({
        isLogout: true,
        isSpinner: false,
        isLogin: false,
      });
    }, 2000);
  };

  render() {
    return (
      <>
        {this.state.isSpinner && <Spinner />}
        {this.state.isLogin && <LogIn onLogin={() => this.onLogin()} />}
        {this.state.isLogout && <LogOut onLogOut={() => this.onLogOut()} />}
      </>
    );
  }
}

export default Auth;
