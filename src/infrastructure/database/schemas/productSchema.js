const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Disponível", "Esgotado"],
    default: "Disponivel",
  },
  lote: {
    type: String,
    required: true,
  },
  validade: {
    type: Date,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
