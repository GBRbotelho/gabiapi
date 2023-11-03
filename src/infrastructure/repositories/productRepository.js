const Product = require("../database/schemas/productSchema");

module.exports = {
  async create(productData) {
    return await Product.create(productData);
  },
  async getByClientId(clientId) {
    return await Product.find({ clientId });
  },
  async update(productId, productData) {
    return await Product.findByIdAndUpdate(productId, productData, {
      new: true,
    });
  },
  async getAll() {
    return await Product.find();
  },
  async getById(productId) {
    return await Product.findById(productId);
  },
  async delete(productId) {
    return await Product.findByIdAndDelete(productId);
  },
};
