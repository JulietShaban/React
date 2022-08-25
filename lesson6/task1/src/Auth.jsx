import React, { Component } from "react";
import Greeting from './Greeting';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
        isLoggedIn: true,
    })
  };
  handleLogout = () => {
    this.setState({
        isLoggedIn: false,
    })
  }
render() {
    let button;

    if(this.state.isLoggedIn){
        <button onClick={this.handleLogout}>LogOut</button>  
    }
    else{
        <button onClick={this.handleLogin}>LogIn</button> 
    }

    return(
        <div className='panel'>
            <Greeting isLoggedIn=(this.state.isLoggedIn) />
            <div>
            {button}
               </div>
        </div>
    )
}
}


export default Auth;
