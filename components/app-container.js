import React, { Component } from "react";
import {
  getSku,
  getProduct,
  getSets,
  getDiscountRules,
} from "../services/inventoryService";

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
            if (typeof cartItems[skuId] === "number") {
              cartItems[skuId] = +quantity;
            } else {
              cartItems[skuId].quantity = +quantity;
            }
            window.cartItems = cartItems;
            this.setState({ cartItems });
          }
        },
        updatePrice: (skuId, price) => {
          if (typeof window !== "undefined") {
            let cartItems = { ...window.cartItems };
            if (typeof cartItems[skuId] === "number") {
              cartItems[skuId] = {
                quantity: cartItems[skuId],
                price: +price,
              };
            } else {
              cartItems[skuId].price = +price;
            }
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
        },
        clearCart: () => {
          window.cartItems = {};
          this.setState({ cartItems: {} });
        },
        getItemPrice: (skuId, cartItem) => {
          const sku = getSku(skuId);
          const { quantity } = cartItem;
          if (!sku) {
            return 0;
          }
          if (cartItem.price) {
            // custom price set on item, for commissions
            return cartItem.price * quantity;
          }
          if (sku.price) {
            // custom price set on sku, for damaged goods or other special cases
            return sku.price * quantity;
          }
          const product = getProduct(sku.parentId);
          let price = 0;

          if (!sku.options) {
            switch (product.medium) {
              case "button":
                price = 2;
                break;
              case "charm":
                price = 10;
                break;
            }
            return price * quantity;
          }

          const { size, finish, quality, side } = sku.options;

          switch (product.medium) {
            case "print":
              if (size === "Mini") {
                price = 3;
                if (finish === "Holographic") {
                  price += 1;
                }
              } else if (size === "Small") {
                price = 5;
                if (finish === "Holographic") {
                  price += 1;
                }
              } else if (size === "Smedium") {
                price = 7;
                if (finish === "Holographic") {
                  price += 1;
                }
              } else if (size === "Medium") {
                price = 10;
                if (finish === "Holographic") {
                  price += 2;
                }
              } else if (size === "Large") {
                price = 15;
                if (finish === "Holographic") {
                  price += 3;
                }
              }
              break;

            case "stickers":
              if (size) {
                if (size === "Tiny") {
                  price = 0.5;
                } else if (size === "Small") {
                  price = 1;
                } else if (size === "Large") {
                  price = 2;
                } else if (size === "Sheet") {
                  price = 5;
                }
              }
              if (quality && quality === "Misprint") {
                price = 2;
              }
              break;
            case "bookmark":
              if (side === "Double-sided") {
                price = 3;
              } else {
                price = 2;
              }
              break;
            case "letter":
              if (size === "Small") {
                price = 2;
              } else {
                price = 4;
              }
              break;
            case "stationery":
              if (size === "6 sheets") {
                price = 5;
              } else {
                price = 10;
              }
              break;
            case "grabbag":
              if (size === "Small") {
                price = 10;
              } else if (size === "Medium") {
                price = 25;
              }
              break;
          }
          return price * quantity;
        },
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
