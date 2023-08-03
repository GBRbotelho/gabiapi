module.exports = async (userRepository) => {
  try {
    return await userRepository.getAll();
  } catch (error) {
    throw { message: "Failed" };
  }
};
