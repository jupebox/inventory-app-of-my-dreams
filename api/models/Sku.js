const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkuOptionsSchema = new Schema({
  finish: String,
  size: String,
});

const SkuSchema = new Schema({
  id: { type: Number, unique: true, dropDups: true },
  inventory: Number,
  options: SkuOptionsSchema,
  parentId: String,
  type: String,
});

module.exports = mongoose.model("Sku", SkuSchema);
