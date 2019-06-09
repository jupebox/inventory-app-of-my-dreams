import React, { Component } from "react";
import { getProducts, getSets, getProduct } from "../services/inventoryService";
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
          placeholder="Search for product"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Products products={this.filterProducts()} />
      </section>
    );
  }
}

export default Search;
