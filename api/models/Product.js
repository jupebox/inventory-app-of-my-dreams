const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductOptionsSchema = new Schema({
  finish: [String],
  size: [String],
});

const ProductSchema = new Schema({
  artist: String,
  id: {
    type: String,
    unique: true,
    dropDups: true,
  },
  imageUrl: String,
  medium: String,
  productOptions: ProductOptionsSchema,
  skuIds: [Number],
  title: String,
  type: String,
});

module.exports = mongoose.model("Product", ProductSchema);
