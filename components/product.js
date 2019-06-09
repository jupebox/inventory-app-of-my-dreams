import React, { Component } from "react";
import { getSku, getProduct } from "../services/inventoryService";
import Link from "next/link";
class Product extends Component {
  state = {};
  renderFinishes = () => {
    return (
      <ul>
        {this.props.product.productOptions.finishes.map(finish => (
          <li key={finish}>
            <label>
              <input type="radio" name="finish" value={finish} />
              <h2>{finish}</h2>
            </label>
          </li>
        ))}
      </ul>
    );
  };
  renderProductOption = (array, key) => {
    return (
      <ul>
        {array.map(item => (
          <li key={item}>
            <label>
              <input type="radio" name={key} value={item} />
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
    if (productOptions.medium) {
      options.push(
        this.renderProductOption(productOptions["medium"], "medium")
      );
    }
    if (productOptions.sizes) {
      options.push(this.renderProductOption(productOptions["sizes"], "size"));
    }
    if (productOptions.finishes) {
      options.push(
        this.renderProductOption(productOptions["finishes"], "finish")
      );
    }
    if (productOptions.quality) {
      options.push(
        this.renderProductOption(productOptions["quality"], "quality")
      );
    }
    if (productOptions.sides) {
      options.push(this.renderProductOption(productOptions["sides"], "side"));
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
          <input type="checkbox" name="sku" value={sku} />
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
  addToCart = () => {
    // hmm good question
    console.log(this.state);
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

        <Link href="/">
          <div className="add-to-cart">
            <a onClick={this.addToCart}>Add to Cart</a>
          </div>
        </Link>

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
