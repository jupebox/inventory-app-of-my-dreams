import React, { Component } from "react";
import { getProducts } from "../services/inventoryService";
import Products from "./products";
class Search extends Component {
  state = { products: getProducts() };
  render() {
    return (
      <section>
        <input type="search" placeholder="Search for product" />
        <Products products={this.state.products} />
      </section>
    );
  }
}

export default Search;
