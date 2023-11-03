module.exports = async (productId, productData, productRepository) => {
  try {
    // Verifica se o cliente existe
    const existingProduct = await productRepository.getById(productId);
    if (!existingProduct) {
      throw { message: "product not found" };
    }

    const updatedProduct = await productRepository.update(
      productId,
      productData
    );
    return updatedProduct;
  } catch (error) {
    throw { message: error.message || "Failed update" };
  }
};
