const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscountRuleSchema = new Schema({
  discount: Number,
  id: {
    type: Number,
    unique: true,
    dropDups: true,
  },
  medium: String,
  quantity: Number,
  size: String,
  title: String,
});

module.exports = mongoose.model("DiscountRule", DiscountRuleSchema);
