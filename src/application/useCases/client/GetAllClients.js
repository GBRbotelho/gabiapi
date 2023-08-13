module.exports = async (clientRepository) => {
  try {
    return await clientRepository.getAll();
  } catch (error) {
    throw { message: "Failed" };
  }
};
