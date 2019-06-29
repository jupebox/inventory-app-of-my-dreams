var product = require("./product");
var set = require("./set");
var discountRule = require("./discountRule");
var sku = require("./sku");

var defaultRoutes = [
  {
    method: "GET",
    path: "/",
    handler: function(request, reply) {
      return `<h1>API Of My Dreams</h1>`;
    },
  },
];

module.exports = [].concat(product, set, discountRule, sku, defaultRoutes);
