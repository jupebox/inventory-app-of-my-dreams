import Product from "../components/product";
import AppContainer from "../components/app-container";
import { getProduct, getSet } from "../services/inventoryService";
import Link from "next/link";

const Item = product => (
  <section>
    <AppContainer>
      <Product product={product} />
    </AppContainer>
    <Link href="/">
      <button>&times;</button>
    </Link>
    <style jsx>{`
      section {
        font-family: Helvetica, Arial, Verdana, sans-serif;
      }
      button {
        -webkit-appearance: none;
        font-family: Helvetica, Arial, Verdana, sans-serif;
        position: absolute;
        top: 15px;
        right: 15px;
        color: #fff;
        background: dodgerblue;
        transition: opacity 0.2s, right 0.15s;
        display: block;
        padding: 0;
        font-size: 40px;
        width: 50px;
        height: 50px;
        font-weight: bold;
        border-radius: 5px;
        text-align: center;
        transition: background 0.15s;
      }
      button:hover,
      button:focus,
      button:active {
        background: midnightblue;
      }
    `}</style>
  </section>
);

Item.getInitialProps = function({ query }) {
  const { id } = query;
  return getProduct(id) || getSet(id);
};

export default Item;
