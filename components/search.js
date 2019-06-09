import React, { Component } from "react";
import { getProducts, getSets } from "../services/inventoryService";
import Products from "./products";

class Search extends Component {
  state = {
    query: ""
  };
  sets = getSets();
  initial_products = getProducts().filter(product => !product.hideFromList);
  filterProducts = () => {
    let filtered_products = [...this.sets, ...this.initial_products];
    const query = this.state.query ? this.state.query.toLowerCase() : false;
    if (query) {
      filtered_products = filtered_products.filter(
        product =>
          product.id.indexOf(query) > -1 ||
          product.title.toLowerCase().indexOf(query) > -1
      );
    }
    return filtered_products;
  };
  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <section>
        <input
          type="search"
          placeholder="Search for a product..."
          value={this.state.query}
          onChange={this.handleChange}
        />
        <div className="scroll-container">
          <Products
            products={this.filterProducts()}
            addToCart={this.props.addToCart}
          />
        </div>

        <style jsx>{`
          section {
            position: relative;
          }
          input {
            font-size: 16px;
            padding: 10px;
            display: block;
            -webkit-appearance: none;
            box-shadow: none;
            border: solid 1px gray;
            border-radius: 5px;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 5;
          }
          .scroll-container {
            padding-top: 30px;
          }
        `}</style>
      </section>
    );
  }
}

export default Search;
