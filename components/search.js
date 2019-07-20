import React, { Component } from "react";
import { getProducts, getSets } from "../services/inventoryService";
import Products from "./products";

class Search extends Component {
  state = {
    query: "",
    tags: [],
  };
  sets = getSets();
  initial_products = getProducts().filter(product => !product.hideFromList);

  filterProducts = () => {
    let filtered_products = [...this.sets, ...this.initial_products];
    const query = this.state.query ? this.state.query.toLowerCase() : false;
    if (query || this.state.tags.length) {
      filtered_products = filtered_products.filter(product => {
        const { id, title, artist, medium } = product;
        const { tags } = this.state;
        let productMatchesQuery = true;
        if (query) {
          productMatchesQuery =
            id.indexOf(query) > -1 ||
            title.toLowerCase().indexOf(query) > -1 ||
            artist.toLowerCase().indexOf(query) > -1 ||
            medium === query;
        }

        for (let tag of tags) {
          if (
            !(
              id.indexOf(tag) > -1 ||
              title.toLowerCase().indexOf(tag) > -1 ||
              artist.toLowerCase().indexOf(tag) > -1 ||
              medium === tag
            )
          ) {
            productMatchesQuery = false;
          }
        }
        return productMatchesQuery;
      });
    }
    return filtered_products;
  };
  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleKeyPress = event => {
    if (event.charCode === 32 || event.charCode === 13) {
      this.addTag(event);
    }
  };

  addTag = event => {
    let { value } = event.target;
    let tags = [...this.state.tags];
    value = value.toLowerCase();
    if (!tags.includes(value)) {
      tags.push(value);
    }
    this.setState({ tags, query: "" });
  };

  removeTag = removedTag => {
    let tags = this.state.tags.filter(tag => {
      return tag !== removedTag;
    });
    this.setState({ tags });
  };

  render() {
    return (
      <section>
        <div className="search-container">
          <ul className="tag-container">
            {this.state.tags.map(tag => (
              <li
                key={tag}
                onClick={() => {
                  this.removeTag(tag);
                }}
                className="tag"
              >
                {tag}
              </li>
            ))}
          </ul>
          <input
            type="search"
            placeholder="Search for a product..."
            value={this.state.query}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>

        <div className="scroll-container">
          <Products
            products={this.filterProducts()}
            addToCart={this.props.addToCart}
          />
        </div>

        <style jsx>{`
          section {
            position: relative;
            box-sizing: border-box;
          }
          .search-container {
            font-size: 16px;
            display: flex;
            border: solid 1px gray;
            border-radius: 5px;
            width: 100%;
            min-width: 200px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 5;
          }
          input {
            -webkit-appearance: none;
            box-shadow: none;
            border: 0;
            font-size: 16px;
            padding: 10px;
            flex: 1;
            margin-right: 2px;
          }
          .tag-container {
            margin: 0 0 0 2px;
            padding: 0;
          }
          .tag-container li {
            margin: 5px 5px 5px 0;
            border: solid 1px rgba(0, 0, 0, 0.5);
            background: dodgerblue;
            color: #fff;
            font-weight: bold;
            font-size: 14px;
            padding: 5px;
            display: inline-block;
            cursor: pointer;
          }
          .scroll-container {
            padding-top: 30px;
            max-height: calc(100vh - 20px);
            overflow: auto;
            box-sizing: border-box;
          }
        `}</style>
      </section>
    );
  }
}

export default Search;
