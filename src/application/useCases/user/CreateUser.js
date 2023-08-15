const bcrypt = require("bcrypt");
const User = require("../../../domain/User");

module.exports = async (userData, userRepository) => {
  try {
    const user = new User(
      userData.firstName,
      userData.lastName,
      userData.password,
      userData.email,
      userData.accountLevel
    );

    const emailValidate = await userRepository.findByEmail(user.email);
    if (emailValidate) {
      throw { message: "Email already exists" };
    }

    const password = await bcrypt.hash(user.password, 10);
    user.password = password;

    return userRepository.create(user);
  } catch (error) {
    throw { message: error.message || "Failed to Create User" };
  }
};
