import React, { Component } from "react";

class AppContainer extends Component {
  //   state = { cartItems: window.cartItems };
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        addToCart: skus => {
          let cartItems = { ...window.cartItems };
          for (let sku of skus) {
            if (cartItems[sku]) {
              cartItems[sku] == { ...cartItems[sku] };
              cartItems[sku]++;
            } else {
              cartItems[sku] = 1;
            }
          }
          window.cartItems = cartItems;
          console.log(window.cartItems);
        }
      });
    });
    return <main>{children}</main>;
  }
}

export default AppContainer;
