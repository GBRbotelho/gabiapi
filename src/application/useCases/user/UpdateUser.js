module.exports = async (userId, userData, userRepository) => {
  try {
    // Verifica se o cliente existe
    const existingUser = await userRepository.getById(userId);
    if (!existingUser) {
      throw { message: "User not found" };
    }

    const updatedUser = await userRepository.update(userId, userData);
    return updatedUser;
  } catch (error) {
    throw { message: error.message || "Failed update" };
  }
};
