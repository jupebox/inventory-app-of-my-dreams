import AppContainer from "../components/app-container";
import Product from "../components/product";
import {
  getProduct,
  getSet,
  getProducts,
  getSets
} from "../services/inventoryService";
import Link from "next/link";
import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);

    if (!props.url.query.id) {
      this.state = {
        title: "",
        artist: "Jupebox"
      };
      return;
    }

    const product =
      getProduct(props.url.query.id) || getSet(props.url.query.id);
    const {
      id,
      artist,
      medium,
      type,
      title,
      imageUrl,
      productOptions,
      skuIds,
      price,
      discount
    } = product;
    this.state = {
      id,
      artist,
      medium,
      type,
      title,
      imageUrl,
      productOptions,
      skuIds,
      price,
      discount,
      typeLocked: true
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOptionChange = event => {
    let arr = event.target.value;
    arr = arr.replace(" ", "");
    arr = arr.split(",");
    let productOptions = { ...this.state.productOptions };
    productOptions[event.target.name] = arr;
    this.setState({ productOptions });
  };

  getActiveOptions = () => {
    return Object.keys(this.state.productOptions);
  };

  suggestId = () => {
    let suggestion = this.state.title.toLowerCase().replace(/[^A-Z0-9]/gi, "_");
    return suggestion;
  };

  toggleOption = option => {
    let productOptions = { ...this.state.productOptions };
    if (this.state.productOptions[option]) {
      delete productOptions[option];
    } else {
      productOptions[option] = [];
    }
    this.setState({ productOptions });
  };

  productOptionTypes = ["size", "finish", "side", "quality", "color"];

  render() {
    return (
      <section>
        <form>
          <section className="fields">
            <h2>Product Information</h2>
            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <input
                type="text"
                name="artist"
                id="artist"
                value={this.state.artist}
                onChange={this.handleChange}
              />
            </div>
            {this.state.typeLocked && (
              <p>
                <b>Type: </b>
                {this.state.type}
              </p>
            )}
            <div className={!this.state.typeLocked ? "form-group" : "hidden"}>
              <label htmlFor="type" className="select-label">
                Type
              </label>
              <select
                name="type"
                id="type"
                defaultValue={this.state.type}
                onChange={this.handleChange}
              >
                <option value="design">Design</option>
                <option value="set">Set</option>
              </select>
            </div>
            <div
              className={this.state.type === "design" ? "form-group" : "hidden"}
            >
              <label htmlFor="medium" className="select-label">
                Medium
              </label>
              <select
                name="medium"
                id="medium"
                defaultValue={this.state.medium}
                onChange={this.handleChange}
              >
                <option value="print">Print</option>
                <option value="button">Button</option>
                <option value="stickers">Stickers</option>
                <option value="charm">Charm</option>
                <option value="bookmark">Bookmark</option>
                <option value="stationery">Stationery</option>
                <option value="booklet">Zine/Comic</option>
                <option value="commission">Commission</option>
                <option value="addon">Add-on</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="id">Id</label>
              <label htmlFor="id" className="clarification">
                Suggestion: <b>{this.suggestId()}</b>
              </label>
              <input
                type="text"
                name="id"
                id="id"
                defaultValue={this.state.id}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                value={this.state.imageUrl}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="skuIds">Sku Ids (comma-separated list)</label>
              <input
                type="text"
                name="skuIds"
                id="skuIds"
                value={this.state.skuIds}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={this.state.type === "set" ? "form-group" : "hidden"}
            >
              <label htmlFor="discount">Discount</label>
              <input
                type="text"
                name="discount"
                id="discount"
                value={this.state.discount}
                onChange={this.handleChange}
              />
            </div>
          </section>
          <section className={this.state.type === "design" ? "" : "hidden"}>
            <h2>Product Options</h2>
            {this.productOptionTypes.map(option => (
              <button
                type="button"
                key={option}
                onClick={() => {
                  this.toggleOption(option);
                }}
                className={
                  this.state.productOptions[option]
                    ? "option selected"
                    : "option"
                }
              >
                {option}
              </button>
            ))}

            {this.getActiveOptions().map(option => (
              <div className="form-group" key={option}>
                <label htmlFor={option}>
                  {option} values (comma-separated list)
                </label>
                <input
                  type="text"
                  name={option}
                  id={option}
                  value={this.state.productOptions[option]}
                  onChange={this.handleOptionChange}
                />
              </div>
            ))}
          </section>
        </form>
        <Link href="/">
          <button className="close">&times;</button>
        </Link>
        <style jsx>{`
          section {
            font-family: Helvetica, Arial, Verdana, sans-serif;
          }
          form {
            display: flex;
            justify-content: flex-start;
          }
          .fields {
            max-width: 300px;
            margin-right: 30px;
          }
          button {
            -webkit-appearance: none;
            font-family: Helvetica, Arial, Verdana, sans-serif;
            color: #000;
            background: #fff;
            transition: opacity 0.2s, right 0.15s;
            display: block;
            padding: 7px 10px;
            font-weight: bold;
            border-radius: 5px;
            text-align: center;
            transition: background 0.15s;
            border: solid 2px rgba(0, 0, 0, 0.5);
            font-size: 16px;
          }
          button:hover,
          button:focus,
          button:active {
            background: #bbb;
          }
          .option {
            margin-bottom: 10px;
            margin-right: 10px;
            display: inline-block;
          }
          .option.selected {
            background: dodgerblue;
            color: #fff;
          }
          .close {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 40px;
            width: 50px;
            height: 50px;
            padding: 0;
            color: #fff;
            background: dodgerblue;
          }
          .close:hover,
          .close:focus,
          .close:active,
          .option.selected:hover,
          .option.selected:focus,
          .option.selected:active {
            background: midnightblue;
          }
          .hidden {
            display: none;
          }
          .form-group {
            display: inline-block;
            margin-bottom: 15px;
            position: relative;
            margin-right: 50%; // this is dumb, I'm just trying to get the select arrows to be in the right place but have each form on a new line
          }
          label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: bold;
          }

          input,
          select {
            font-size: 16px;
            border: solid 1px gray;
            border-radius: 5px;
            min-width: 200px;
            -webkit-appearance: none;
            box-shadow: none;
            font-size: 16px;
            padding: 10px;
            margin: 0;
          }
          select {
            background: #fff;
          }
          .select-label:after {
            content: "\\25BC";
            position: absolute;
            top: 33px;
            right: 8px;
            color: #666;
          }
          .clarification {
            font-style: italic;
            font-size: 12px;
            font-weight: normal;
          }
        `}</style>
      </section>
    );
  }
}

export default Edit;
