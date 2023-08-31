const bcrypt = require("bcrypt");

module.exports = async (token, newPassword, repository) => {
  try {
    // Buscar usuário pelo token de redefinição
    const user = await repository.findByToken(token);

    if (!user) {
      throw { message: "UserID not found" };
    }

    // Atualizar senha do usuário
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    await repository.update(user._id, user);

    return { message: "Senha redefinida com sucesso" };
  } catch (error) {
    throw { message: error.message };
  }
};
