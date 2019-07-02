const DiscountRule = require("../../models/DiscountRule");
module.exports = [
  {
    method: "GET",
    path: "/api/v1/discountRules",
    handler: function(request, reply) {
      return DiscountRule.find();
    },
  },
  {
    method: "POST",
    path: "/api/v1/discountRule",
    handler: (request, reply) => {
      const discountRule = new DiscountRule(request.payload);
      return discountRule.save();
    },
  },
  {
    method: "POST",
    path: "/api/v1/discountRules",
    handler: (request, reply) => {
      if (request.payload.discountRules) {
        return DiscountRule.insertMany(request.payload.discountRules);
      }
    },
  },
];
