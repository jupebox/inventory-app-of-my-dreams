import Link from "next/link";
import React, { Component } from "react";

class Products extends Component {
  renderProduct = product => {
    const content = (
      <article>
        <div className="image-container">
          <img src={product.imageUrl} />
        </div>

        <div className="text-container">
          <h1>
            {product.title}
            {product.medium ? ` (${product.medium})` : ""}
          </h1>
        </div>
        <style jsx>{`
          article {
            display: flex;
          }
          .text-container {
            padding-left: 15px;
            text-align: left;
          }
          .img-container {
            width: 150px;
          }
          img {
            max-width: 150px;
            max-height: 150px;
            align-self: flex-start;
          }
        `}</style>
      </article>
    );

    if (product.skuIds && product.skuIds.length > 1) {
      return (
        <li key={product.id}>
          <Link href={`/item?id=${product.id}`}>
            <a>{content}</a>
          </Link>
          <style jsx>
            {`
              li {
                list-style: none;
                border-bottom: solid 2px gray;
                padding: 15px;
              }
            `}
          </style>
        </li>
      );
    }

    return (
      <li key={product.id}>
        <a
          onClick={() => {
            this.props.addToCart([product.skuIds[0]]);
          }}
        >
          {content}
        </a>
        <style jsx>
          {`
            li {
              list-style: none;
              border-bottom: solid 2px gray;
              padding: 15px;
            }
          `}
        </style>
      </li>
    );
  };
  render() {
    const { products } = this.props;
    return <ul>{products && products.map(this.renderProduct)}</ul>;
  }
}

export default Products;
