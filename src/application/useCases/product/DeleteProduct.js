module.exports = async (productId, productRepository) => {
  try {
    const product = await productRepository.getById(productId);
    if (!product) {
      throw { message: "productID not found" };
    }
    // Exclui o Serviço
    await productRepository.delete(product);

    return true;
  } catch (error) {
    throw { message: error.message };
  }
};
