module.exports = async (serviceRepository) => {
  try {
    return await serviceRepository.getAll();
  } catch (error) {
    throw { message: "Failed" };
  }
};
