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
            font-family: Helvetica, Arial, Verdana, sans-serif;
          }
          h1 {
            font-size: 16px;
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
              }
              li:nth-child(odd) {
                background: #efefef;
              }
              a {
                padding: 15px;
                display: block;
                color: dodgerblue;
                position: relative;
                overflow: hidden;
                padding-right: 60px;
              }
              a:hover,
              a:focus,
              a:active {
                color: midnightblue;
              }
              a:after {
                content: "\\00BB";
                color: #fff;
                background: midnightblue;
                opacity: 0;
                transition: opacity 0.2s, right 0.15s;
                display: block;
                position: absolute;
                right: -60px;
                top: 10px;
                padding: 0;
                font-size: 40px;
                line-height: 45px;
                width: 50px;
                height: 50px;
                font-weight: bold;
                border-radius: 5px;
                text-align: center;
              }
              a:hover:after {
                opacity: 1;
                right: 10px;
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
            }
            li:nth-child(odd) {
              background: #efefef;
            }
            a {
              padding: 15px;
              display: block;
              cursor: pointer;
              text-decoration: underline;
              position: relative;
              overflow: hidden;
            }
            a:hover,
            a:focus,
            a:active {
              color: dodgerblue;
            }
            a:after {
              content: "+";
              color: #fff;
              background: dodgerblue;
              opacity: 0;
              transition: opacity 0.2s, right 0.15s;
              display: block;
              position: absolute;
              right: -60px;
              top: 10px;
              padding: 0;
              font-size: 40px;
              line-height: 45px;
              width: 50px;
              height: 50px;
              font-weight: bold;
              border-radius: 5px;
              text-align: center;
            }
            a:hover:after {
              opacity: 1;
              right: 10px;
            }
          `}
        </style>
      </li>
    );
  };
  render() {
    const { products } = this.props;
    return (
      <ul>
        {products && products.map(this.renderProduct)}
        <style jsx>{`
          ul {
            padding: 0;
          }
        `}</style>
      </ul>
    );
  }
}

export default Products;
