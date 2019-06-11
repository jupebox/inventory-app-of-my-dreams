import React, { Component } from "react";

class AppContainer extends Component {
  // currently have to work with window object because state doesn't persist between pages
  state = { cartItems: typeof window !== "undefined" ? window.cartItems : [] };
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        addToCart: skus => {
          if (typeof window !== "undefined") {
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
            this.setState({ cartItems });
          }
        },
        getCartItems: () => {
          return this.state.cartItems || [];
        },
        updateQuantity: (skuId, quantity) => {
          if (typeof window !== "undefined") {
            let cartItems = { ...window.cartItems };
            cartItems[skuId] = +quantity;
            window.cartItems = cartItems;
            this.setState({ cartItems });
          }
        },
        removeItem: skuId => {
          if (typeof window !== "undefined") {
            let cartItems = { ...window.cartItems };
            delete cartItems[skuId];
            window.cartItems = cartItems;
            this.setState({ cartItems });
          }
        }
      });
    });
    return (
      <main>
        {children}
        <style jsx>{`
          main {
            display: flex;
            font-family: Helvetica, Arial, Verdana, sans-serif;
          }
        `}</style>
      </main>
    );
  }
}

export default AppContainer;
