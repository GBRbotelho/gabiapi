module.exports = async (userData, userRepository) => {
  try {
    // Procurar usuário por email ou username
    const user = await userRepository.findByEmail(userData.email);

    // Verificar se o usuário existe
    if (!user) {
      throw { message: "Email not found" };
    }

    // Verificar a senha
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //   throw new Error("Invalid password");
    // }
    if (userData.password !== user.password) {
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
