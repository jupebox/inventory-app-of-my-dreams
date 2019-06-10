import React, { Component } from "react";
import { getSku, getProduct } from "../services/inventoryService";
import Router from "next/router";

// http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}

class Product extends Component {
  constructor(props) {
    super(props);
    let checkedItems = { all: false };
    const { skuIds, productOptions } = this.props.product;
    for (let sku of skuIds) {
      checkedItems[sku] = false;
    }
    let selectedOptions = {};
    for (let option in productOptions) {
      if (productOptions[option].length === 1) {
        selectedOptions[option] = productOptions[option][0];
      }
    }

    this.state = {
      checkedItems,
      selectedOptions,
      selectedSkuIds: []
    };
  }
  handleOptionChange = event => {
    const { checked, value, name } = event.target;
    let selectedOptions = { ...this.state.selectedOptions };
    if (checked) {
      selectedOptions[name] = value;
    }

    this.setState({
      selectedOptions
    });
  };
  handleSelectAll = event => {
    const { checked } = event.target;
    let checkedItems = { all: true };

    if (checked) {
      for (let sku of this.props.product.skuIds) {
        checkedItems[sku] = true;
      }
    } else {
      checkedItems = {};
    }
    this.setState({ checkedItems });
  };
  handleSkuChange = event => {
    const { checked, value } = event.target;
    // let selectedSkuIds = [...this.state.selectedSkuIds];
    let checkedItems = { ...this.state.checkedItems };

    checkedItems[value] = checked;

    this.setState({ checkedItems });
  };
  getSelectedSkuIds = () => {
    let selectedSkuIds = [];
    let items = this.state.checkedItems;
    for (let key in items) {
      if (key !== "all" && items[key]) {
        selectedSkuIds.push(key);
      }
    }
    return selectedSkuIds;
  };
  getSkuFromOptions = () => {
    let selectedSkuId = [];
    let options = this.state.selectedOptions;
    const { skuIds } = this.props.product;
    for (let skuId of skuIds) {
      let sku = getSku(skuId);
      if (isEquivalent(sku.options, options)) {
        selectedSkuId.push(skuId);
        break;
      }
    }
    return selectedSkuId;
  };
  getCanAddToCart = () => {
    const skuIds =
      this.props.product.type === "design"
        ? this.getSkuFromOptions()
        : this.getSelectedSkuIds();
    return skuIds.length > 0;
  };
  handleClick = () => {
    const skuIds =
      this.props.product.type === "design"
        ? this.getSkuFromOptions()
        : this.getSelectedSkuIds();

    if (skuIds.length < 1) {
      return;
    }
    this.props.addToCart(skuIds);
    Router.push("/");
  };

  renderProductOption = (array, key) => {
    return (
      <ul key={key}>
        {array.map(item => (
          <li
            key={item}
            className={
              this.state.selectedOptions[key] === item ? "selected" : ""
            }
          >
            <label>
              <input
                type="radio"
                name={key}
                value={item}
                checked={this.state.selectedOptions[key] === item}
                onChange={this.handleOptionChange}
              />
              <h2>{item}</h2>
            </label>
            <style jsx>{`
              li {
                list-style: none;
                border: solid 2px rgba(0, 0, 0, 0.5);
                border-top-width: 0;
                background: #fff;
                color: #000;
                transition: background 0.15s, color 0.15s;
                min-width: 200px;
              }
              li:nth-child(odd) {
                background: #efefef;
              }
              li:last-child {
                border-radius: 0 0 5px 5px;
              }
              li:first-child {
                border-top-width: 2px;
                border-radius: 5px 5px 0 0;
              }
              label {
                display: block;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                padding: 15px;
              }
              .selected {
                background: dodgerblue;
                color: #fff;
              }
              .selected:nth-child(odd) {
                background: #157adc;
              }
              input {
                position: absolute;
                left: -999px;
              }
              h2 {
                font-size: 14px;
                margin: 0;
              }
            `}</style>
          </li>
        ))}
      </ul>
    );
  };
  renderProductOptions = () => {
    const { productOptions } = this.props.product;
    let options = [];
    if (!productOptions) {
      return;
    }
    for (let option in productOptions) {
      if (productOptions[option].length > 1) {
        options.push(this.renderProductOption(productOptions[option], option));
      }
    }
    return (
      <div className="options">
        {options}
        <style jsx>{`
          .options {
            display: flex;
          }
        `}</style>
      </div>
    );
  };
  renderSku = sku => {
    const product =
      sku === "all"
        ? { title: "Select All" }
        : getProduct(getSku(sku).parentId);
    return (
      <li key={sku} className={this.state.checkedItems[sku] ? "selected" : ""}>
        <label className={sku === "all" ? "select-all" : "option"}>
          <input
            type="checkbox"
            name="sku"
            value={sku}
            checked={this.state.checkedItems[sku]}
            onChange={
              sku === "all" ? this.handleSelectAll : this.handleSkuChange
            }
          />
          <h2>{product.title}</h2>
        </label>
        <style jsx>{`
          li {
            list-style: none;

            border: solid 2px rgba(0, 0, 0, 0.5);
            border-top-width: 0;
            background: #fff;
            color: #000;
            transition: background 0.15s, color 0.15s;
          }
          li:nth-child(odd) {
            background: #efefef;
          }
          li:last-child {
            border-radius: 0 0 5px 5px;
          }
          li:first-child {
            border-top-width: 2px;
            border-radius: 5px 5px 0 0;
          }
          label {
            display: block;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            padding: 15px 15px 15px 60px;
          }
          .select-all {
            background: #fff;
            color: #000;
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .select-all:before {
            position: absolute;
            content: "";
            width: 30px;
            height: 30px;
            border: solid 2px gray;
            border-radius: 5px;
            display: block;
            left: 15px;
            top: 10px;
          }
          .select-all:after {
            position: absolute;
            content: "\\2713";
            display: block;
            left: 18px;
            top: 0;
            opacity: 0;
            transition: top 0.15s, opacity 0.2s;
            font-size: 50px;
            line-height: 0;
          }
          .selected .select-all:after {
            top: 20px;
            opacity: 1;
          }
          .select-all:hover {
            color: dodgerblue;
          }
          .selected {
            background: dodgerblue;
            color: #fff;
          }
          .selected:nth-child(odd) {
            background: #157adc;
          }
          input {
            position: absolute;
            left: -999px;
          }
          h2 {
            font-size: 14px;
            margin: 0;
          }
        `}</style>
      </li>
    );
  };
  renderSkus = () => {
    return (
      <ul>
        {this.renderSku("all")}
        {this.props.product.skuIds.map(this.renderSku)}
        <style jsx>{`
          ul {
            display: block;
            margin-bottom: 30px;
            padding: 0;
          }
        `}</style>
      </ul>
    );
  };
  render() {
    const { title, medium, imageUrl, type } = this.props.product;
    return (
      <article>
        <div className="image-container">
          <img src={imageUrl} />
        </div>

        <div className="text-container">
          <h1>
            {title}
            {medium ? ` (${medium})` : ""}
          </h1>
          {type === "design" ? this.renderProductOptions() : this.renderSkus()}
        </div>

        <button
          className="add-to-cart"
          disabled={!this.getCanAddToCart()}
          onClick={() => {
            this.handleClick();
          }}
        >
          Add to Cart
        </button>

        <style jsx>{`
          article {
            display: flex;
            padding-bottom: 60px;
          }
          .text-container {
            padding-left: 15px;
          }
          .img-container {
            width: 150px;
          }
          img {
            max-width: 250px;
            max-height: 250px;
            align-self: flex-start;
          }
          .add-to-cart {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            -webkit-appearance: none;
            display: block;
            border: 0;
            background: dodgerblue;
            color: #fff;
            font-size: 24px;
            width: 100%;
            padding: 15px;
            cursor: pointer;
          }
          .add-to-cart[disabled] {
            background: gray;
          }
        `}</style>
      </article>
    );
  }
}

export default Product;
