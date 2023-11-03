const Product = require("../../../domain/Product");

module.exports = async (productData, productRepository) => {
  try {
    const product = new Product(
      productData.name,
      productData.description,
      productData.lote,
      productData.validade
    );

    return productRepository.create(product);
  } catch (error) {
    throw { message: error.message || "Failed to Create treatment" };
  }
};
