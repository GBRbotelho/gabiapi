module.exports = async (userId, userRepository) => {
  try {
    const user = await userRepository.getById(userId);
    if (!user) {
      throw { message: "UserID not found" };
    }
    return user;
  } catch (error) {
    throw { message: error.message };
  }
};
