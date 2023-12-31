const bcrypt = require("bcrypt");
const jwtService = require("../../security/authentication/jwtService");

module.exports = async (userData, userRepository) => {
  try {
    const user = await userRepository.findByEmail(userData.email);

    if (!user) {
      throw { message: "Email não encontrado" };
    }

    const isPasswordValid = await bcrypt.compare(
      userData.password,
      user.password
    );
    if (!isPasswordValid) {
      throw { message: "Senha invalida" };
    }

    const token = jwtService.createToken({
      userId: user._id,
      email: user.email,
    });

    return token;
  } catch (error) {
    throw { message: error.message };
  }
};
