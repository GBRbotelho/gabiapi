module.exports = async (productId, productRepository) => {
  try {
    const product = await productRepository.getById(productId);
    if (!product) {
      throw { message: "productID not found" };
    }
    return product;
  } catch (error) {
    throw { message: error.message };
  }
};
