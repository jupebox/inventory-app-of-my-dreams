const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
  sku: String,
  quantity: Number,
  price: Number,
});

const RuleSchema = new Schema({
  id: String,
  title: String,
  discount: Number,
});

const PrintQuantitySchema = new Schema({
  Mini: Number,
  Small: Number,
  Smedium: Number,
  Medium: Number,
  Large: Number,
});

const StickerQuantitySchema = new Schema({
  Tiny: Number,
  Small: Number,
  Large: Number,
  Sheet: Number,
});

const CategoryQuantitiesSchema = new Schema({
  addon: Number,
  booklet: Number,
  bookmark: Number,
  button: Number,
  charm: Number,
  commission: Number,
  print: PrintQuantitySchema,
  stationary: Number,
  stickers: StickerQuantitySchema,
});

const OrderSchema = new Schema({
  appliedRules: [RuleSchema],
  cartItems: [CartItemSchema],
  categoryQuantities: CategoryQuantitiesSchema,
  chargeFee: Boolean,
  customDiscount: Number,
  discountsFromRules: Number,
  location: String,
  notes: String,
  paymentMethod: String,
  productIds: [String],
  squareFee: Number,
  subtotal: Number,
  total: Number,
  totalDiscount: Number,
  totalQuantity: Number,
});

module.exports = mongoose.model("Order", OrderSchema);
