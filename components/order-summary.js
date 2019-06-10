import React, { Component } from "react";
import {
  getSku,
  getProduct,
  getDiscountRules
} from "../services/inventoryService";

class OrderSummary extends Component {
  state = {
    cartItems: [],
    customDiscount: null,
    discountType: "dollar amount"
    // appliedRules: []
  };
  componentDidMount() {
    if (window.cartItems) {
      let cartItems = [];
      const keys = Object.keys(window.cartItems);
      for (let key of keys) {
        cartItems.push({ sku: key, quantity: window.cartItems[key] });
      }
      this.setState({ cartItems });
    }
  }
  handleDiscountChange = event => {
    this.setState({ customDiscount: event.target.value });
  };
  handleDiscountTypeClick = event => {
    this.setState({
      discountType:
        this.state.discountType === "percent" ? "dollar amount" : "percent"
    });
  };
  explodeCart = () => {
    const { cartItems } = this.state;
    let explodedCart = {
      skus: [],
      products: [],
      totalQuantity: 0,
      categoryQuantities: {
        print: { Mini: 0, Small: 0, Smedium: 0, Medium: 0, Large: 0 },
        stickers: { Tiny: 0, Small: 0, Large: 0, Sheet: 0 },
        button: 0
      }
    };
    for (let item of cartItems) {
      const sku = getSku(+item.sku);
      const product = getProduct(sku.parentId);
      const { medium } = product;
      explodedCart.totalQuantity += item.quantity;
      explodedCart.skus.push(sku);
      if (explodedCart.products.indexOf(product) < 0) {
        explodedCart.products.push(product);
      }
      if (medium === "print" || medium === "stickers") {
        explodedCart.categoryQuantities[medium][sku.options.size] +=
          item.quantity;
      } else if (medium === "button") {
        explodedCart.categoryQuantities.button += item.quantity;
      }
    }
    return explodedCart;
  };
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
  getDiscounts = () => {
    const customDiscount = +this.state.customDiscount || 0;
    const discountRules = getDiscountRules();
    const explodedCart = this.explodeCart();
    let discountsFromRules = 0;
    let appliedRules = [];
    for (let rule of discountRules) {
      const { categoryQuantities: cat } = explodedCart;
      const { medium, quantity, size, discount, title, id } = rule;
      let currentDiscount = 0;
      if (cat[medium]) {
        if ([medium] === "button") {
          currentDiscount = Math.floor(cat[medium] / quantity) * discount;
        } else if (cat[medium][size]) {
          currentDiscount = Math.floor(cat[medium][size] / quantity) * discount;
        }
        discountsFromRules += currentDiscount;
        if (currentDiscount) {
          appliedRules.push({ id, title, discount: currentDiscount });
        }
      }
    }
    // if (this.state.appliedRules.length !== appliedRules.length) {
    //   this.setState({ appliedRules });
    // }

    return { totalDiscount: customDiscount + discountsFromRules, appliedRules };
  };
  getTotal = () => {
    return this.getSubtotal() - this.getDiscounts().totalDiscount;
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
        <div className="scroll-container">
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
              {this.getDiscounts().appliedRules.map(rule => (
                <tr className="discount" key={rule.id}>
                  <td>
                    Discount <br />
                    Rule:
                  </td>
                  <td>{rule.title}</td>
                  <td>-${rule.discount}</td>
                </tr>
              ))}
              <tr>
                <td>
                  Custom
                  <br />
                  Discount:
                </td>
                <td colSpan="2">
                  <button
                    className="discount-type"
                    onClick={this.handleDiscountTypeClick}
                  >
                    {this.state.discountType === "percent" ? "%" : "$"}
                  </button>
                  <input
                    type="tel"
                    defaultValue={this.state.customDiscount}
                    onChange={this.handleDiscountChange}
                    placeholder="Custom Discount"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">Total:</td>
                <td>${this.getTotal()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <style jsx>{`
          * {
            box-sizing: border-box;
          }
          .scroll-container {
            max-height: calc(100vh - 65px);
            overflow: auto;
            box-sizing: border-box;
          }
          h1 {
            margin: 9px 15px;
          }
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
          tr {
            border-bottom: solid 1px #bbb;
          }
          tr:last-child {
            border: 0;
            font-size: 20px;
          }

          input {
            font-size: 14px;
            padding: 10px;
            display: block;
            -webkit-appearance: none;
            box-shadow: none;
            border: solid 1px gray;
            border-left: 0;
            border-radius: 0 5px 5px 0;
            width: calc(100% - 40px);
            float: left;
            margin-top: 1px;
          }
          .discount {
            color: red;
          }
          .discount-type {
            font-size: 20px;
            padding: 0;
            display: block;
            -webkit-appearance: none;
            box-shadow: none;
            float: left;
            width: 40px;
            height: 40px;
            border-radius: 5px 0 0 5px;
            background: dodgerblue;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
          }
          .discount-type:hover,
          .discount-type:active,
          .discount-type:focus {
            background: midnightblue;
          }
        `}</style>
      </aside>
    );
  }
}

export default OrderSummary;
