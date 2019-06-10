import React, { Component } from "react";
import { getSku, getProduct } from "../services/inventoryService";

class OrderSummary extends Component {
  state = { cartItems: [] };
  componentDidMount() {
    if (window.cartItems) {
      let cartItems = [];
      const keys = Object.keys(window.cartItems);
      for (let key of keys) {
        cartItems.push({ sku: key, quantity: window.cartItems[key] });
      }
      console.log("state", cartItems);
      this.setState({ cartItems });
    }
  }
  getItemPrice = (skuId, quantity) => {
    const sku = getSku(skuId);
    if (!sku) {
      return 0;
    }
    if (sku.price) {
      // custom price set on sku, for damaged goods or other special cases
      return sku.price;
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
          price = 2;
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
          price = 5;
        } else {
          price = 2;
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
  };
  getSubtotal = () => {
    let subtotal = 0;
    const cartItems = this.state.cartItems;
    for (let item of cartItems) {
      subtotal += this.getItemPrice(+item.sku, item.quantity);
    }
    return subtotal;
  };
  renderTableRow = cartItem => {
    const sku = getSku(+cartItem.sku);
    const product = getProduct(sku.parentId);
    let productOptions = [];

    for (let option in sku.options) {
      productOptions.push(sku.options[option]);
    }
    if (productOptions.length) {
      productOptions = productOptions.join(", ");
    }
    return (
      <tr key={sku.id}>
        <td>
          <img src={product.imageUrl} />
        </td>
        <td>
          {product.title}
          {productOptions.length ? ` (${productOptions})` : ""}
        </td>
        <td>${this.getItemPrice(sku.id, cartItem.quantity)}</td>
        <style jsx>{`
          img {
            width: 50px;
            height: auto;
          }
          td {
            padding: 10px;
          }
          td:last-child {
            font-weight: bold;
            text-align: right;
          }

          tr {
            border-bottom: solid 2px gray;
            background: #f7f7f7;
          }
          tr:nth-child(odd) {
            background: #fff;
          }
        `}</style>
      </tr>
    );
  };
  render() {
    return (
      <aside>
        <h1>Order Summary</h1>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{this.state.cartItems.map(this.renderTableRow)}</tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Subtotal:</td>
              <td>${this.getSubtotal()}</td>
            </tr>
          </tfoot>
        </table>
        <style jsx>{`
          table {
            border-collapse: collapse;
            margin: 0 15px;
            background: #efefef;
            padding: 15px;
          }
          td,
          th {
            text-align: left;
            padding: 10px;
          }
          td:last-child {
            font-weight: bold;
            text-align: right;
          }
          tfoot td {
            padding-top: 15px;
          }
        `}</style>
      </aside>
    );
  }
}

export default OrderSummary;
