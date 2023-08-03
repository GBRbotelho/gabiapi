const User = require("../../../domain/User");

module.exports = async (userData, userRepository) => {
  try {
    const user = new User(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password,
      userData.accountLevel
    );

    //Verifica se ja existe esse email no Banco de Dados
    const emailValidate = await userRepository.findByEmail(user.email);
    if (emailValidate) {
      throw { message: "Email already exists" };
    }

    return userRepository.create(user);
  } catch (error) {
    throw { message: error.message || "Failed to Create User" };
  }
};
