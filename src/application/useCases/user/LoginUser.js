const bcrypt = require("bcrypt");

module.exports = async (userData, userRepository) => {
  try {
    const user = await userRepository.findByEmail(userData.email);

    if (!user) {
      throw { message: "Email not found" };
    }

    const isPasswordValid = await bcrypt.compare(
      userData.password,
      user.password
    );
    if (!isPasswordValid) {
      throw { message: "Invalid password" };
    }

    // Gerar token de autenticação
    // const token = jwt.sign({ userId: user._id }, secretKey, {
    //   expiresIn: "1h",
    // });
    const token = "1";

    // Retornar token
    return token;
  } catch (error) {
    throw { message: error.message };
  }
};
