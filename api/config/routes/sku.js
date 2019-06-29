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
      const { id, inventory, options, parentId, type } = request.payload;

      const sku = new Sku({
        id,
        inventory,
        options,
        parentId,
        type,
      });
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
