module.exports = async (userId, userRepository) => {
  try {
    const user = await userRepository.getById(userId);
    if (!user) {
      throw { message: "UserID not found" };
    }
    // Exclui o usuario
    await userRepository.delete(user);

    return true;
  } catch (error) {
    throw { message: error.message };
  }
};
