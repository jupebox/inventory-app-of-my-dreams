"use strict";

const Hapi = require("hapi");
const mongoose = require("mongoose");
const MongoDBUrl = "mongodb://localhost:27017/inventory-app-of-my-dreams";

// TODO (Eddie): Write README for API part
// TODO (Eddie): Separate routes by Model and include
// TODO (Eddie): Implement delete HTTP methods
// TODO (Eddie): Implement way to upload collection
const Product = require("./models/Product");
const Set = require("./models/Set");
const DiscountRule = require("./models/DiscountRule");
const Sku = require("./models/Sku");

// Create a server with a host and port
const server = new Hapi.Server({
  host: "localhost",
  port: 3001
});

const start = async function() {
  try {
    server.route([
      {
        method: "GET",
        path: "/",
        handler: function(request, reply) {
          return `<h1>API Of My Dreams</h1>`;
        }
      },
      {
        method: "GET",
        path: "/api/v1/products",
        handler: function(request, reply) {
          return Product.find();
        }
      },
      {
        method: "POST",
        path: "/api/v1/products",
        handler: (request, reply) => {
          const {
            id,
            artist,
            imageUrl,
            medium,
            productOptions,
            skuIds,
            title,
            type
          } = request.payload;
          const product = new Product({
            artist,
            id,
            imageUrl,
            medium,
            productOptions,
            skuIds,
            title,
            type
          });
          return product.save();
        }
      },
      {
        method: "GET",
        path: "/api/v1/sets",
        handler: function(request, reply) {
          return Set.find();
        }
      },
      {
        method: "POST",
        path: "/api/v1/sets",
        handler: (request, reply) => {
          const { discount, id, price, skuIds, title, type } = request.payload;
          const set = new Set({
            discount,
            id,
            price,
            skuIds,
            title,
            type
          });
          return set.save();
        }
      },
      {
        method: "GET",
        path: "/api/v1/discountRules",
        handler: function(request, reply) {
          return DiscountRule.find();
        }
      },
      {
        method: "POST",
        path: "/api/v1/discountRules",
        handler: (request, reply) => {
          const {
            discount,
            id,
            medium,
            quantity,
            size,
            title
          } = request.payload;

          const discountRule = new DiscountRule({
            discount,
            id,
            medium,
            quantity,
            size,
            title
          });
          return discountRule.save();
        }
      },
      {
        method: "GET",
        path: "/api/v1/skus",
        handler: function(request, reply) {
          return Sku.find();
        }
      },
      {
        method: "POST",
        path: "/api/v1/skus",
        handler: (request, reply) => {
          const { id, inventory, options, parentId, type } = request.payload;

          const sku = new Sku({
            id,
            inventory,
            options,
            parentId,
            type
          });
          return sku.save();
        }
      }
    ]);

    // Connect to DB
    mongoose.connect(MongoDBUrl, { useNewUrlParser: true }).then(
      () => {
        console.log(`Connected to Mongo server`);
      },
      err => {
        console.log(err);
      }
    );

    // Start the server
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log("Hapi error starting server", err);
  }
};

start();
