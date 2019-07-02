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
      const set = new Set(request.payload);
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
