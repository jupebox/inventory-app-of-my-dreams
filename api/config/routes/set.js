const Set = require("../../models/Set");

module.exports = [
  {
    method: "GET",
    path: "/api/v1/sets",
    handler: function(request, reply) {
      return Set.find();
    },
  },
  {
    method: "POST",
    path: "/api/v1/set",
    handler: (request, reply) => {
      const { discount, id, price, skuIds, title, type } = request.payload;
      const set = new Set({
        discount,
        id,
        price,
        skuIds,
        title,
        type,
      });
      return set.save();
    },
  },
  {
    method: "POST",
    path: "/api/v1/sets",
    handler: (request, reply) => {
      if (request.payload.sets) {
        return Set.insertMany(request.payload.sets);
      }
    },
  },
];
