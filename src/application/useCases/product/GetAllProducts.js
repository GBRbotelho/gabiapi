module.exports = async (productRepository) => {
  try {
    return await productRepository.getAll();
  } catch (error) {
    throw { message: "Failed" };
  }
};
