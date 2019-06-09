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
      canAddToCart: true,
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
      selectedOptions,
      canAddToCart: this.getSkuFromOptions().length > -1
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
          <li key={item}>
            <label>
              <input
                type="radio"
                name={key}
                value={item}
                checked={this.state.selectedOptions[key] == item}
                onChange={this.handleOptionChange}
              />
              <h2>{item}</h2>
            </label>
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
    return <div className="options">{options}</div>;
  };
  renderSku = sku => {
    const product =
      sku === "all"
        ? { title: "Select All" }
        : getProduct(getSku(sku).parentId);
    return (
      <li key={sku}>
        <label>
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
      </li>
    );
  };
  renderSkus = () => {
    return (
      <ul>
        {this.renderSku("all")}
        {this.props.product.skuIds.map(this.renderSku)}
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
          disabled={!this.state.canAddToCart}
          onClick={() => {
            this.handleClick();
          }}
        >
          Add to Cart
        </button>

        <style jsx>{`
          article {
            display: flex;
            justify-content: space-between;
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
            align-self: flex-end;
          }
        `}</style>
      </article>
    );
  }
}

export default Product;
