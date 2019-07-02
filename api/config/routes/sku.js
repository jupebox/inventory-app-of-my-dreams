const Sku = require("../../models/Sku");

module.exports = [
  {
    method: "GET",
    path: "/api/v1/skus",
    handler: function(request, reply) {
      return Sku.find();
    },
  },
  {
    method: "POST",
    path: "/api/v1/sku",
    handler: (request, reply) => {
      const sku = new Sku(request.payload);
      return sku.save();
    },
  },
  {
    method: "POST",
    path: "/api/v1/skus",
    handler: (request, reply) => {
      if (request.payload.skus) {
        return Sku.insertMany(request.payload.skus);
      }
    },
  },
];
