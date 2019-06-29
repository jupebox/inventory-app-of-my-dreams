const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SetSchema = new Schema({
  discount: Number,
  id: {
    type: String,
    unique: true,
    dropDups: true,
  },
  price: Number,
  skuIds: [Number],
  title: String,
  type: String,
});

module.exports = mongoose.model("Set", SetSchema);
