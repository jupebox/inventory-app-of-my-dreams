const Product = props => {
  const { title, medium, imageUrl } = props.product;
  return (
    <article>
      <img src={imageUrl} />
      <div>
        <h1>
          {title} ({medium})
        </h1>
      </div>
      <style jsx>{`
        div {
          width: 66%;
        }
        img {
          width: 33%;
        }
      `}</style>
    </article>
  );
};

export default Product;
