const Product = require("../../models/Product");

module.exports = [
  {
    method: "GET",
    path: "/api/v1/products",
    handler: function(request, reply) {
      return Product.find();
    },
  },
  {
    method: "POST",
    path: "/api/v1/product",
    handler: (request, reply) => {
      const {
        id,
        artist,
        imageUrl,
        medium,
        productOptions,
        skuIds,
        title,
        type,
      } = request.payload;
      const product = new Product({
        artist,
        id,
        imageUrl,
        medium,
        productOptions,
        skuIds,
        title,
        type,
      });
      return product.save();
    },
  },
  {
    method: "POST",
    path: "/api/v1/products",
    handler: (request, reply) => {
      if (request.payload.products) {
        return Product.insertMany(request.payload.products);
      }
    },
  },
];
