import React, { Component } from "react";
import axios from "axios";

import {
  getSku,
  getProduct,
  getSets,
  getDiscountRules,
} from "../services/inventoryService";

class OrderSummary extends Component {
  state = {
    customDiscount: null,
    discountType: "dollar amount",
    paymentMethod: "cash",
    chargeFee: false,
    location: "Anime Expo (Los Angeles)",
    notes: "",
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleDiscountTypeClick = event => {
    this.setState({
      discountType:
        this.state.discountType === "percent" ? "dollar amount" : "percent",
    });
  };
  handleOptionChange = event => {
    const { checked, value } = event.target;
    let paymentMethod = "cash";
    if (checked) {
      paymentMethod = value;
    }

    this.setState({
      paymentMethod,
    });
  };
  handleCheckboxChange = event => {
    const { checked } = event.target;
    let chargeFee = checked;
    this.setState({
      chargeFee,
    });
  };
  handleQuantityUpdate = event => {
    const { value, name } = event.target;
    if (typeof +value === NaN || value < 0) {
      event.preventDefault();
      return;
    }
    this.props.updateQuantity(name, value);
  };
  handleCommissionPriceChange = (cartItem, event) => {
    const { value } = event.target;
    if (typeof +value === NaN || value < 0) {
      event.preventDefault();
      return;
    }
    this.props.updatePrice(cartItem.sku, value);
  };
  placeOrder = () => {
    const explodedCart = this.explodeCart();
    const { products, totalQuantity, categoryQuantities } = explodedCart;
    const cartItems = this.getFormattedCartItems();
    const {
      location,
      paymentMethod,
      customDiscount,
      chargeFee,
      notes,
    } = this.state;
    const { totalDiscount, appliedRules } = this.getDiscounts();
    let orderInfo = {
      cartItems,
      productIds: products.map(product => product.id),
      totalQuantity,
      categoryQuantities,
      location,
      paymentMethod,
      customDiscount,
      discountsFromRules: +totalDiscount - +customDiscount,
      totalDiscount,
      appliedRules,
      squareFee: this.getSquareFee().raw,
      chargeFee,
      subtotal: this.getSubtotal(),
      total: this.getTotal(),
      notes,
    };
    const clearCart = this.props.clearCart;
    axios
      .post("http://localhost:3001/api/v1/order", orderInfo)
      .then(function(response) {
        console.log(response);
        clearCart();
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  explodeCart = passedCartItems => {
    const cartItems = passedCartItems || this.getFormattedCartItems();
    let explodedCart = {
      skus: [],
      products: [],
      totalQuantity: 0,
      categoryQuantities: {
        print: { Mini: 0, Small: 0, Smedium: 0, Medium: 0, Large: 0 },
        stickers: { Tiny: 0, Small: 0, Large: 0, Sheet: 0 },
        button: 0,
        charm: 0,
        stationery: 0,
        commission: 0,
        addon: 0,
        bookmark: 0,
        booklet: 0,
      },
    };
    for (let item of cartItems) {
      const sku = getSku(item.sku);
      const product = getProduct(sku.parentId);
      const { medium } = product;
      explodedCart.totalQuantity += +item.quantity;
      explodedCart.skus.push(sku);
      if (explodedCart.products.indexOf(product) < 0) {
        explodedCart.products.push(product);
      }
      if (medium === "print" || medium === "stickers") {
        explodedCart.categoryQuantities[medium][
          sku.options.size
        ] += +item.quantity;
      } else {
        explodedCart.categoryQuantities[medium] += +item.quantity;
      }
    }
    return explodedCart;
  };
  getFormattedCartItems = () => {
    let cartItems = [];
    const initialCartItems = this.props.getCartItems();
    const keys = Object.keys(initialCartItems);
    for (let key of keys) {
      if (typeof initialCartItems[key] === "number") {
        cartItems.push({ sku: +key, quantity: initialCartItems[key] });
      } else {
        cartItems.push({
          sku: +key,
          quantity: initialCartItems[key].quantity,
          price: initialCartItems[key].price,
        });
      }
    }
    return cartItems;
  };

  getSubtotal = () => {
    let subtotal = 0;
    const cartItems = this.getFormattedCartItems();
    for (let item of cartItems) {
      subtotal += this.props.getItemPrice(item.sku, item);
    }
    return subtotal;
  };
  getDiscounts = () => {
    const customDiscount = +this.state.customDiscount || 0;
    const discountRules = getDiscountRules();
    let cartItems = JSON.parse(JSON.stringify(this.getFormattedCartItems()));
    const sets = getSets();
    let discountsFromRules = 0;
    let appliedRules = [];

    for (let set of sets) {
      if (set.discount) {
        let skusFound = [];
        for (let sku of set.skuIds) {
          let result = cartItems.find(item => {
            return item.sku === sku && item.quantity > 0;
          });
          if (result) {
            skusFound.push(result);
          }
        }
        if (skusFound.length === set.skuIds.length) {
          discountsFromRules += +set.discount;
          appliedRules.push({
            id: set.id,
            title: set.title + " Set",
            discount: set.discount,
          });
          for (let item of cartItems) {
            if (skusFound.includes(item)) {
              item.quantity--;
            }
          }
        }
      }
    }

    const explodedCart = this.explodeCart(cartItems);

    for (let rule of discountRules) {
      const { categoryQuantities: cat } = explodedCart;
      const { medium, quantity, size, discount, title, id } = rule;
      let currentDiscount = 0;
      if (cat[medium]) {
        if (medium === "button") {
          // todo: this isn't working
          currentDiscount = Math.floor(cat[medium] / quantity) * discount;
        } else if (cat[medium][size]) {
          currentDiscount = Math.floor(cat[medium][size] / quantity) * discount;
        }
        discountsFromRules += +currentDiscount;
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
  getSquareFee = () => {
    let fee = this.getTotal() ? (this.getTotal() * 0.029 + 0.3).toFixed(2) : 0;
    return { formatted: `$${fee}`, raw: fee };
  };
  renderTableRow = cartItem => {
    const sku = getSku(cartItem.sku);
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
          <button
            onClick={() => {
              this.props.removeItem(sku.id);
            }}
          >
            &times;
          </button>
        </td>
        <td>
          {product.title}
          {productOptions.length ? ` (${productOptions})` : ""}
        </td>
        <td>
          <input
            className="field"
            type="number"
            name={sku.id}
            value={cartItem.quantity}
            onChange={this.handleQuantityUpdate}
          />
        </td>
        <td>
          <span className="dollar-sign">$</span>
          {product.id.indexOf("commission") > -1 ? (
            <input
              className="field price"
              type="number"
              name="price"
              defaultValue={cartItem.price}
              onChange={event => {
                this.handleCommissionPriceChange(cartItem, event);
              }}
            />
          ) : (
            this.props.getItemPrice(sku.id, cartItem)
          )}
        </td>
        <style jsx>{`
          img {
            width: 50px;
            height: auto;
          }
          td {
            padding: 10px;
            position: relative;
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
          .field {
            font-size: 14px;
            padding: 10px;
            display: block;
            -webkit-appearance: none;
            box-shadow: none;
            border: solid 1px gray;
            border-radius: 5px;
            width: 30px;
          }
          .price {
            max-width: calc(100% - 1.5em);
            display: inline-block;
          }
          button {
            font-size: 25px;
            font-weight: bold;
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            -webkit-appearance: none;
            background: none;
            color: rgba(0, 0, 0, 0.5);
            border: 0;
            text-shadow: 1px 1px rgba(255, 255, 255, 0.7);
            cursor: pointer;
            transition: color 0.15s, text-shadow 0.15s;
          }
          button:hover {
            color: rgba(0, 0, 0, 1);
            text-shadow: 2px 2px rgba(255, 255, 255, 1);
          }
        `}</style>
      </tr>
    );
  };
  render() {
    return (
      <aside key="order-sum">
        <h1>Order Summary</h1>
        <div className="scroll-container">
          <table>
            <thead>
              <tr>
                <th colSpan="2">Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.getFormattedCartItems().map(this.renderTableRow)}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Subtotal:</td>
                <td colSpan="2">${this.getSubtotal()}</td>
              </tr>
              {this.getDiscounts().appliedRules.map(rule => (
                <tr className="discount" key={rule.id}>
                  <td>
                    Discount <br />
                    Rule:
                  </td>
                  <td colSpan="2">{rule.title}</td>
                  <td>-${rule.discount}</td>
                </tr>
              ))}
              <tr>
                <td>
                  Custom
                  <br />
                  Discount:
                </td>
                <td colSpan="3">
                  <button
                    className="discount-type"
                    onClick={this.handleDiscountTypeClick}
                  >
                    {this.state.discountType === "percent" ? "%" : "$"}
                  </button>
                  <input
                    className="field custom-discount"
                    type="tel"
                    defaultValue={this.state.customDiscount}
                    name="customDiscount"
                    onChange={this.handleChange}
                    placeholder="Custom Discount"
                  />
                </td>
              </tr>
              <tr className="total">
                <td colSpan="2">Total:</td>
                <td colSpan="2">${this.getTotal()}</td>
              </tr>
              <tr>
                <td>
                  Payment <br />
                  Method:
                </td>
                <td colSpan="3">
                  <label
                    className={
                      this.state.paymentMethod === "cash"
                        ? "selected option"
                        : "option"
                    }
                  >
                    <input
                      type="radio"
                      name="method"
                      value="cash"
                      checked={this.state.paymentMethod === "cash"}
                      onChange={this.handleOptionChange}
                    />
                    Cash
                  </label>
                  <label
                    className={
                      this.state.paymentMethod === "square"
                        ? "selected option"
                        : "option"
                    }
                  >
                    <input
                      type="radio"
                      name="method"
                      value="square"
                      checked={this.state.paymentMethod === "square"}
                      onChange={this.handleOptionChange}
                    />
                    Square
                  </label>
                </td>
              </tr>
              {this.state.paymentMethod === "square" && (
                <tr>
                  <td colSpan="2">
                    Charge <br />
                    Square Fee?
                  </td>
                  <td colSpan="2">
                    Fee: {this.getSquareFee().formatted}
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        onChange={this.handleCheckboxChange}
                        defaultValue={this.state.chargeFee}
                      />
                      <i className="checkbox-substitute">✔</i>
                    </label>
                  </td>
                </tr>
              )}
              <tr>
                <td>Location:</td>
                <td colSpan="3">
                  <input
                    className="field"
                    type="text"
                    defaultValue={this.state.location}
                    name="location"
                    onChange={this.handleChange}
                    placeholder="Location"
                  />
                </td>
              </tr>
              <tr>
                <td>Notes:</td>
                <td colSpan="3">
                  <textarea
                    className="field"
                    type="text"
                    defaultValue={this.state.notes}
                    name="notes"
                    onChange={this.handleChange}
                    placeholder="Order notes"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <button className="place-order" onClick={this.placeOrder}>
                    Place Order
                  </button>
                </td>
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
          }
          .total {
            font-size: 20px;
          }
          .field {
            font-size: 14px;
            padding: 10px;
            display: block;
            -webkit-appearance: none;
            box-shadow: none;
            border: solid 1px gray;
            border-radius: 5px;
            width: 100%;
          }
          .custom-discount {
            text-align: right;
            border-left: 0;
            border-radius: 0 5px 5px 0;
            width: calc(100% - 40px);
            float: left;
            margin-top: 1px;
          }
          .discount {
            color: red;
          }
          button {
            font-size: 20px;
            display: block;
            -webkit-appearance: none;
            box-shadow: none;
            background: dodgerblue;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
            padding: 10px;
          }
          .discount-type {
            padding: 0;
            float: left;
            width: 40px;
            height: 40px;
            border-radius: 5px 0 0 5px;
          }
          button:hover,
          button:active,
          button:focus {
            background: midnightblue;
          }
          .option {
            background: #fff;
            display: inline-block;
            padding: 10px;
            overflow: hidden;
            margin-right: 10px;
            border: solid 2px rgba(0, 0, 0, 0.5);
            border-radius: 5px;
            transition: background 0.15s, color 0.15s;
          }
          .option input {
            position: absolute;
            left: -999px;
          }
          .selected.option {
            background: dodgerblue;
            color: #fff;
          }
          .place-order {
            width: 100%;
          }
          .checkbox {
            position: relative;
            width: 30px;
            height: 30px;
            border: solid 2px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            background: #fff;
            display: inline-block;
            border-radius: 5px;
            margin-left: 10px;
            vertical-align: middle;
          }
          .checkbox input {
            position: absolute;
            left: -9999px;
          }
          .checkbox-substitute {
            position: absolute;
            display: block;
            transition: top 0.2s, opacity 0.3s;
            top: -10px;
            left: 3px;
            z-index: 1;
            font-style: normal;
            font-size: 25px;
            color: #000;
            opacity: 0;
          }
          input:checked + .checkbox-substitute {
            top: -2px;
            opacity: 1;
          }
        `}</style>
      </aside>
    );
  }
}

export default OrderSummary;
