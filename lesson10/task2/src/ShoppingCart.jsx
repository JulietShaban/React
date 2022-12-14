import React, { Component } from "react";
import ProductList from "./ProductsList";
import CartTitle from './CartTitle'

class ShoppingCart extends Component {
    state = {
        cartItems: [
          {
            id: "1",
            name: "iPhone 11",
            price: 999,
          },
          {
            id: "2",
            name: "iPadPro",
            price: 799,
          },
        ],
      };
    render(){
        const count = this.cartItems.length;
        return (
            <div className="column">
            <CartTitle userName={this.props.userData.firstName} count={count} />
                <ProductList cartItems={this.state.cartItems} />
            </div>
        )
    }
}


export default ShoppingCart;