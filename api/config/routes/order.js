const Order = require("../../models/Order");
module.exports = [
  {
    method: "GET",
    path: "/api/v1/orders",
    handler: function(request, reply) {
      return Order.find();
    },
  },
  {
    method: "POST",
    path: "/api/v1/order",
    handler: (request, reply) => {
      const order = new Order(request.payload);
      return order.save();
    },
  },
  {
    method: "POST",
    path: "/api/v1/orders",
    handler: (request, reply) => {
      if (request.payload.orders) {
        return Order.insertMany(request.payload.orders);
      }
    },
  },
];
