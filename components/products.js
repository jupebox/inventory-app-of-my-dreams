import Link from "next/link";

const Products = props => {
  const { products } = props;
  return (
    <ul>
      {products &&
        products.map(product => (
          <li key={product.id}>
            <Link href={`/item?id=${product.id}`}>
              <a>
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
                </article>
              </a>
            </Link>
            <style jsx>{`
              li {
                list-style: none;
                border-bottom: solid 2px gray;
                padding: 15px;
              }
              article {
                display: flex;
              }
              .text-container {
                padding-left: 15px;
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
          </li>
        ))}
    </ul>
  );
};

export default Products;
