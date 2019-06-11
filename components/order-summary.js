import React, { Component } from "react";
import {
  getSku,
  getProduct,
  getSets,
  getDiscountRules
} from "../services/inventoryService";

class OrderSummary extends Component {
  state = {
    customDiscount: null,
    discountType: "dollar amount",
    paymentMethod: "cash",
    location: "Anime Expo (Los Angeles)"
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleDiscountTypeClick = event => {
    this.setState({
      discountType:
        this.state.discountType === "percent" ? "dollar amount" : "percent"
    });
  };
  handleOptionChange = event => {
    const { checked, value } = event.target;
    let paymentMethod = "cash";
    if (checked) {
      paymentMethod = value;
    }

    this.setState({
      paymentMethod
    });
  };
  handleQuantityUpdate = event => {
    const { value, name } = event.target;
    if (typeof +value !== NaN) {
      this.props.updateQuantity(name, value);
    }
  };
  handleCommissionPriceChange = cartItem => {};
  placeOrder = () => {
    const explodedCart = this.explodeCart();
    const { products, totalQuantity, categoryQuantities } = explodedCart;
    const cartItems = this.getFormattedCartItems();
    const { location, paymentMethod, customDiscount } = this.state;
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
      subtotal: this.getSubtotal(),
      total: this.getTotal()
    };
    console.log(orderInfo);
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
        button: 0
      }
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
      } else if (medium === "button") {
        explodedCart.categoryQuantities.button += +item.quantity;
      }
    }
    return explodedCart;
  };
  getFormattedCartItems = () => {
    let cartItems = [];
    const initialCartItems = this.props.getCartItems();
    const keys = Object.keys(initialCartItems);
    for (let key of keys) {
      cartItems.push({ sku: +key, quantity: initialCartItems[key] });
    }
    return cartItems;
  };
  getItemPrice = (skuId, quantity) => {
    const sku = getSku(skuId);
    if (!sku) {
      return 0;
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
    const cartItems = this.getFormattedCartItems();
    for (let item of cartItems) {
      subtotal += this.getItemPrice(item.sku, item.quantity);
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
            discount: set.discount
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
            defaultValue={cartItem.quantity}
            onChange={this.handleQuantityUpdate}
          />
        </td>
        <td>
          $
          {product.id.indexOf("commission") > -1 ? (
            <input
              className="field"
              type="number"
              name="price"
              defaultValue={cartItem.price}
              onChange={() => {
                this.handleCommissionPriceChange(cartItem);
              }}
            />
          ) : (
            this.getItemPrice(sku.id, cartItem.quantity)
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
        `}</style>
      </aside>
    );
  }
}

export default OrderSummary;
