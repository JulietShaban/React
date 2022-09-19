import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { Link } from "react-router-dom";
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/products">Products</Link>
            </li>
          </ul>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products' component={Products}/>
          
         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
